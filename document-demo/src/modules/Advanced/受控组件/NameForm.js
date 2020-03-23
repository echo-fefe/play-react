// 在大多数情况下，推荐使用 受控组件 来处理表单数据
// 在一个受控组件中，表单数据是由 React 组件来管理的
// 另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理(如之前的NameForm)

// 要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，可以 使用 ref 来从 DOM 节点中获取表单数据

import React, { Component } from 'react'

export default class NameForm extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
  }

  handleSubmit = (event) => {
    console.log(this.input) // {current: input} input有各组属性和方法
    // 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问
    console.log(this.input.current.value)
    alert('A name was submitted:' + this.input.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            defaultValue="Kiyola"
            type="text"
            ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
