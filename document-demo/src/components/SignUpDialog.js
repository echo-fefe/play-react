/**
 * 组合 & 继承
 */
import React from 'react';

function FancyBorder(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder>
      {/* 其中所有内容都会作为一个children prop传递给 FancyBorder */}
      <h1>
        {props.title}
      </h1>
      <p>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

// 通过组合来实现特殊组件的定制
class SignUpDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  submit = () => {
    alert(`Welcome, ${this.state.name}`)
  }
  render() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spaceraft!"
      >
        <label>
          name:
          <input value={this.state.name} onChange={this.handleChange}></input>
        </label>
        <button onClick={this.submit}>Sign Up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog