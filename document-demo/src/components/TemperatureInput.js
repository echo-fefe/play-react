/**
 * 状态提升
 */
import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      // <fieldset>通常用来对表单中的控制元素进行分组(也包括 label 元素)
      <fieldset>
        {/* 代表一个用于表示它的父元素<fieldset>的内容的标题, 并且<legend>作为其第一个子元素 */}
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput