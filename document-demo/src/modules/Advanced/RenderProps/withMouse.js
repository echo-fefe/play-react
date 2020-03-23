// 使用 withMouse HOC而不是 <Mouse> 组件

// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
// 使用具有 render prop 的普通组件创建一个

import React, { Component } from 'react'
import Mouse from './Mouse'

function withMouse(TheComponent) {
  return class withMouse extends Component {
    render() {
      return (
        <Mouse render={mouse => (
          <TheComponent {...this.props} mouse={mouse} />
        )} />
      )
    }
  }
}

