// 高阶组件（HOC）
// 是 React 中用于复用组件逻辑的一种高级技巧
// 不是 React API 的一部分
// 是一种基于 React 的组合特性而形成的 设计模式

// 参数为组件，返回值为新组件 的 函数

// TODO 与普通组件区别
// 组件 是将 props 转换为 UI
// 高阶组件 是将 组件 转换为 另一个组件

// TODO 思想：一个抽象，允许我们在一个地方定义这个逻辑，并在许多组件之间共享它

// TODO HOC
// 不会修改传入的组件，也不会使用继承来复制其行为
// 通过将组件包装在容器组件中来组成新组件
// 是纯函数，没有副作用

// TODO 约定
// 不要改变原始组件；使用组合
// 将不相关的 props 透传给被包裹的组件
// 最大化可组合性
// 包装显示名称以便轻松调试

// TODO 注意
// 不要在 render 方法中使用 HOC
// 务必复制静态方法
// Refs 不会被传递 （解决方案：使用 React.forwardRef）

import withSubscription from './withSubscription'
import BlogPost from './BlogPost'
import CommentList from './CommentList'
import DataSource from './DataSource'

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)