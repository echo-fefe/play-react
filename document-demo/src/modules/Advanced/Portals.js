// Portal 提供了一种将 子节点渲染到存在于父组件以外的DOM节点 的优秀的方案
// TODO ReactDOM.createPortal(child, container)
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment
// 第二个参数（container）是一个 DOM 元素
/*
React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中
`domNode` 是一个可以在任何位置的有效 DOM 节点

render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  )
}
*/

// TODO 典型用例
// 当父组件有 overflow: hidden 或 z-index 样式时
// 但需要子组件能够在视觉上“跳出”其容器
// 例如，对话框、悬浮卡以及提示框

// TODO 通过 Portal 进行事件冒泡
// 尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致
// 由于 portal 仍存在于 React 树， 且与 DOM 树 中的位置无关，那么无论其子节点是否是 portal，像 context 这样的功能特性都是不变的
// 一个从 portal 内部触发的事件会一直冒泡至包含 React 树的祖先，即便这些元素并不是 DOM 树 中的祖先

import React, { Component } from 'react'

const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，这个 portal 元素会被嵌入到 DOM 树中
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中
    // 如果要求子组件在挂载时可以立刻接入 DOM 树
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Parent extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
       click: 0
    }
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}

const Child = () => (
  <div>
    <button>Click</button>
  </div>
)

ReactDOM.render(
  <Parent />,
  appRoot
)
