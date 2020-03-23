// JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖

// TODO 大写字母开头 的 JSX 标签意味着它们是 React 组件
// 用户定义的组件必须以大写字母开头

// TODO React 必须在作用域内
// 由于 JSX 会编译为 React.createElement 调用形式，所以 React 库也必须包含在 JSX 代码作用域内

// TODO 在运行时选择类型
// 不能将通用表达式作为 React 元素类型
// 如果想通过通用表达式来（动态）决定元素类型，需要首先将它赋值给 大写字母开头的变量

// TODO JSX 中的 Props
// 包裹在 {} 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素

// if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但可以用在 JSX 以外的代码中

// 可以将字符串字面量赋值给 prop
// 当你将字符串字面量赋值给 prop 时，它的值是未转义的
//    所以 <MyComponent message="&lt;3" /> 与 <MyComponent message={'<3'} /> 等效

// Props 默认值为 true
//    <MyTextBox autocomplete /> 与 <MyTextBox autocomplete={true} /> 等效

// 属性展开：可以使用展开运算符 ... 来在 JSX 中传递整个 props 对象

// TODO JSX 中的子元素
// 包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 props.children 传递给外层组件
// JavaScript 表达式可以被包裹在 {} 中作为子元素
// 函数作为子元素，只要确保在该组件渲染之前能够被转换成 React 理解的对象
// false, null, undefined, true 是合法的子元素，但它们并不会被渲染
// 如果想渲染 false、true、null、undefined 等值，你需要先将它们转换为 字符串

import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  // TODO 在 JSX 中，你也可以使用点语法来引用一个 React 组件
  // 当你在一个模块中导出许多 React 组件时，这会非常方便
  return <MyComponents.DatePicker color="blue" />;
}