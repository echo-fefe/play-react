/**
 * 无障碍 - 鼠标和指针事件
 */
import React from 'react'

class BlurExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       isOpen: false
    }
    this.timerId = null
  }

  onClickHandler = () => {
    this.setState(current => ({
      isOpen: !current.isOpen
    }))
  }

  // TODO: 深入理解这里的思想！！！
  // 下一个时间点使用 setTimeout 关闭弹窗
  // 这是必要的，因为 失去焦点事件 会在新的焦点事件前被触发
  // 需要通过这个步骤确认这个元素的一个子节点 是否得到了焦点
  onBlurHandler = () => {
    console.log('blur')
    this.timerId = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    });
  }

  // 如果一个子节点获得了焦点，不要关闭弹窗
  onFocusHandler = () => {
    console.log('focus')
    clearTimeout(this.timerId)
  }

  render() {
    return (
      // 把 失去焦点 和 获得焦点 事件传输给父节点
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    )
  }
}

export default BlurExample