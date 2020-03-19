/**
 * 无障碍 - 鼠标和指针事件
 */
import React from 'react';

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggleContainer = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler)
  }

  onClickOutsideHandler = (event) => {
    /**
     * TODO: Node 是一个接口，许多 DOM API 对象的类型会从这个接口继承
     * Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
     */
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({
        isOpen: false
      })
    }
  }

  onClickHandler = () => {
    // 注意是 => ({}), 避免 异步更新 的问题
    this.setState(current => ({
      isOpen: !current.isOpen
    }))
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
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

export default OuterClickExample