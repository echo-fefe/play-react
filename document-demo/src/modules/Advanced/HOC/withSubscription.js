import React, { Component } from 'react'
import DataSource from './DataSource'

export default function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    componentDidMount() {
      // 订阅更改
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      // 清除订阅
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange () {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // TODO 请注意，HOC 应该透传与自身无关的 props
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }

}