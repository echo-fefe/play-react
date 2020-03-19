/**
 * 表单
 */
import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      textareaVal: 'please......',
      selectVal: 'mango'
    }
  }

  handleSubmit = (event) => {
    alert('submit!!!')
    event.preventDefault()
  }

  handleInputChange = (event) => {
    // TODO: event.target 就是 <input type="text" value="xxxxxxxxx">...</input>
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTextareaChange = (event) => {
    this.setState({
      textareaVal: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      selectVal: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label>
          age:
          {/* 处理多个 input 元素时，可给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作 */}
          <input name="age" type="text" value={this.state.age} onChange={this.handleInputChange} />
        </label>

        <br />

        <label>
          textarea:
          <textarea value={this.state.textareaVal} onChange={this.handleTextareaChange} />
        </label>

        <br />

        <label>
          select单选：
          <select value={this.state.selectVal} onChange={this.handleSelectChange}>
            {
              ['orange', 'coconut', 'mango'].map(item =>
                <option value={item} key={item}>{item}</option>
              )
            }
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }

}

export default NameForm