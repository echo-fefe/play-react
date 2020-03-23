import React from 'react'

// 输出组件 props 到控制台的 HOC
// “logProps” HOC 透传（pass through）所有 props 到其包裹的组件
// ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理

function logProps(TheComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps, prevState) {
      console.log('old props:', prevProps)
      console.log('new props', this.props)
    }

    render() {
      const { forwardedRef, ...rest } = this.props
      return <TheComponent ref={forwardedRef} {...rest} />
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上
  return React.forwardRef((props, ref) => (
    <LogProps {...props} forwardedRef={ref} />
  ))
}