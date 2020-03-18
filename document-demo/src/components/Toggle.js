/**
 * 事件处理、条件渲染
 */
import React from 'react'

// 使用 React 时，一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器
// 事实上，只需要在该元素初始渲染的时候添加监听器即可

// 必须谨慎对待 JSX 回调函数中的 this
// 在 JavaScript 中，class 的方法默认不会绑定 this

function Warning(props) {
  // 在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染
  // 可以让 render 方法直接返回 null，而不进行任何渲染
  if (!props.warn) {
    return null
  }
  return (
    <div>
      Warning!!!
    </div>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      showDelete: false
    }
    // 方式一：为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick1 = this.handleClick1.bind(this)
  }

  // 方式二： class fields 语法 （推荐）
  handleClick2 = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  handleClick3() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  handleClick1() {
    // 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用 --- 异步更新
    // this.setState({ isToggleOn: !state.isToggleOn })  可能无法更新
    // 要依赖之前的值来更新下一个状态，就要让setState() 接收一个函数而不是一个对象
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  deleteRow(val, e) {
    console.log(val, e)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClick2}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/* 方式三： 此语法确保 `handleClick` 内的 `this` 已被绑定 */}
        <button onClick={() => this.handleClick3()}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        {/* 条件渲染 */}
        {this.showDelete && <button onClick={(e) => this.deleteRow(1, e)}>Delete Row</button>}
        {this.showDelete && <button onClick={this.deleteRow.bind(this, 2)}>Delete Row</button>}

        <Warning warn={this.state.isToggleOn} />
      </div>
    )
  }
}

export default Toggle