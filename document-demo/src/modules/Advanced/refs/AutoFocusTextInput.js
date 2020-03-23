// Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素

// TODO 适合使用 refs 的情况：
// 管理焦点，文本选择或媒体播放
// 触发强制动画
// 集成第三方 DOM 库

// 避免使用 refs 来做任何可以通过声明式实现来完成的事情

// 使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素
// 在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们

// TODO 不能在函数组件上使用 ref 属性，因为他们没有实例
// 如果要在函数组件中使用 ref，可以使用 forwardRef（可与 useImperativeHandle 结合使用）
// 或者可以将该组件转化为 class 组件

// TODO 可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件

// 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问
// TODO const node = this.myRef.current

// React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值
// ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前 更新

import React, { Component } from 'react'

class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef()
  }

  focusTextInput = () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus()
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

// 包装上面的 CustomTextInput，来模拟它挂载之后立即被点击的操作
class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props)
    this.customTextInput = React.createRef()
  }

  componentDidMount() {
    this.customTextInput.current.focusTextInput()
  }

  render() {
    return (
      <CustomTextInput ref={this.customTextInput} />
    )
  }
}

function CustomTextInput2(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = React.useRef(null)

  function handleClick() {
    textInput.current.focus()
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  )
}
