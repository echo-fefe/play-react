// 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

// 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑
/*
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
*/

// 使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）

// TODO render prop 是一个用于告知组件需要渲染什么内容的函数 prop

// 可以使用带有 render prop 的常规组件来实现大多数高阶组件 (HOC)

// TODO render prop 是因为模式才被称为 render prop ，不一定要用名为 render 的 prop 来使用这种模式

// 事实上， 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”

import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'

// 可以提供一个带有函数 prop 的 <Mouse> 组件，它能够动态决定什么需要渲染的
// 而不是将 <Cat> 硬编码到 <Mouse> 组件里，并有效地改变它的渲染结果
export default class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>移动鼠标！</h1>
        {/* 提供了一个 render 方法 让 <Mouse> 能够动态决定什么需要渲染，而不是克隆 <Mouse> 组件然后硬编码来解决特定的用例 */}
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    )
  }
}


// TODO 将 Render Props 与 React.PureComponent 一起使用时要小心
// 如果在 render 方法里创建函数，那么使用 render prop 会抵消使用 React.PureComponent 带来的优势
// 为了绕过这一问题，有时可以定义一个 prop 作为实例方法
class MouseTracker2 extends Component {
  // 定义为实例方法，`this.renderTheCat`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }
}