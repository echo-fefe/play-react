import React, { Component } from 'react'

export default class FileInput extends Component {
  constructor(props) {
    super(props)

    this.fileInput = React.createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.fileInput)
    alert(`Selected file - ${this.fileInput.current.files[0].name}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
