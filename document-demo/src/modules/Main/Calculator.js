/**
 * 状态提升
 */
import React from 'react';
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

function toCalsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

// TODO: 这个设计思想要好好学习！！！
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  // temperature值无效时，返回 ''
  if (Number.isNaN(input)) return ''
  const output = convert(input)
  // 保留三位小数 并 四舍五入
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange = (e) => {
    this.setState({
      temperature: e.target.value,
      scale: 'c'
    })
  }

  handleFahrenheitChange = (e) => {
    this.setState({
      temperature: e.target.value,
      scale: 'f'
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCalsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return(
      <div>
        {/* 状态提升 - 这个是：受控组件 */}
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator