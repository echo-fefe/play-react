/**
 * 列表 & key
 */
import React from 'react'

// key 只是在兄弟节点之间必须唯一
// 它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值

function ListItem(props) {
  // 这里不需要指定 key
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers
  const ListItems = numbers.map(item =>
    // key 应该在数组的上下文中被指定
    <ListItem key={item.toString()} value={item} />
  )

  return (
    <ul>
      {ListItems}
      {/* JSX 允许在大括号中嵌入任何表达式 */}
      {numbers.map(item =>
        <ListItem key={item.toString()} value={item} />
      )}
    </ul>
  )
}

export default NumberList