import React from 'react'

// TODO  Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
// 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言

// TODO const MyContext = React.createContext(defaultValue)
// 创建一个 Context 对象
// 当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效

// TODO <MyContext.Provider value={/* 某个值 */}>
// 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化
// Provider 接收一个 value 属性，传递给消费组件
// 一个 Provider 可以和多个消费组件有对应关系
// 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
// 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染
// Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新

// TODO Class.contextType
// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象
// 这能让你使用 this.context 来消费最近 Context 上的那个值
// 你可以在任何生命周期中访问到它，包括 render 函数中

// TODO Context.Consumer
// 在函数式组件中完成订阅 context，需要函数作为子元素（function as a child）

// TODO Context.displayName
// React DevTools 使用该字符串来确定 context 要显示的内容

const ThemeContext = React.createContext('light')
ThemeContext.displayName = 'MyDisplayName'

class ThemeComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <ToolBar />
      </ThemeContext.Provider>
    )
  }
}

const Button = (props) => (
  <div>{props.theme}</div>
)

const ToolBar = () => (
  <div>
    <ThemeButton1 />
    <ThemeButton2 />
    {/* TODO 方式三：ThemeContext.Consumer包含函数式组件 */}
    <ThemeContext.Consumer>
      {(value) => <Button theme={value} />}
    </ThemeContext.Consumer>
  </div>
)

// TODO 方式一：class中，类属性 static contextType
class ThemeButton1 extends React.Component {
  // 指定 contextType 读取当前的 theme context  --- Class.contextType
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”
  static contextType = ThemeContext
  render() {
    return (
      <div>
        <Button theme={this.context} />
      </div>
    )
  }
}

// TODO 方式二：class外，可以 Class.contextType
class ThemeButton2 extends React.Component {
  componentDidMount() {
    // let value = this.context
    // 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作
  }
  componentDidUpdate(prevProps, prevState) {
    // let value = this.context
  }
  componentWillUnmount() {
    // let value = this.context
  }
  render() {
    let value = this.context
    // 基于 ThemeContext 组件的值进行渲染
    return <Button theme={value} />
  }
}
ThemeButton2.contextType = ThemeContext

export default ThemeComponent