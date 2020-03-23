// 部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界

// TODO 错误边界是一种 React 组件
// 这种组件可以捕获并打印发生在其 子组件树 任何位置的 JavaScript 错误
// 它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树
// 错误边界 在渲染期间、生命周期方法和整个组件树的构造函数中 捕获错误

// TODO 错误边界无法捕获以下场景中产生的错误：
// 事件处理器内部的错误（使用普通的 JavaScript try / catch 语句）
// 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
// 服务端渲染
// 它自身抛出来的错误（并非它的子组件）

// TODO class 组件中定义了一下两个中任意一个，那么它就变成一个错误边界
// 当抛出错误后，使用
// static getDerivedStateFromError() 渲染备用 UI
// componentDidCatch() 打印错误信息

// TODO 只有 class 组件才可以成为错误边界组件

// 自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}