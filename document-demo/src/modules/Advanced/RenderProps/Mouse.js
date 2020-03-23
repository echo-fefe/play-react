import React, { Component } from 'react'

export default class Mouse extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    // TODO render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式
    return (
      <div style={{ height: '100vh'}} onMouseMove={this.handleMouseMove}>
       {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    )
  }
}