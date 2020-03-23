// TODO Fragments允许你将子列表分组，而无需向 DOM 添加额外节点
// 方式一： <React.Fragment>...</React.Fragment> 支持 key
// 方式二： <></> 短语法，不支持 key或属性

import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    )
  }
}

// <Columns /> 需要返回多个 <td> 元素以使渲染的 HTML 有效
// 如果在 <Columns /> 的 render() 中使用了父 div，则生成的 HTML 将无效
class Columns extends Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    )
  }
}
