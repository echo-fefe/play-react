// Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件

// 转发 refs 到 DOM 组件

import React from 'react'

// FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button
const FancyButton = React.forwardRef((props, ref) => (
  // 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

// 使用 FancyButton 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样
// const ref = React.createRef()
// <FancyButton ref={ref}>Click me!</FancyButton>
