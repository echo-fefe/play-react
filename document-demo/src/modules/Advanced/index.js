import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

// TODO React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件)
// 接受一个函数，这个函数需要动态调用 import()
// 它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件

// TODO 应在 Suspense 组件中渲染 lazy 组件
// 如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）
// 可以将 Suspense 组件置于懒加载组件之上的 任何位置!!!
// 甚至可以用一个 Suspense 组件包裹 多个懒加载组件

// TODO fallback 属性接受任何在组件加载过程中你想展示的 React 元素

const ThemeComponent = React.lazy(() => import('./ThemeComponent'))
const MyComponent = React.lazy(() => import('./MyComponent'))

// 如果模块加载失败（如网络问题），它会触发一个错误。
// 你可以通过异常捕获边界（Error boundaries）技术来处理这些情况，以显示良好的用户体验并管理恢复事宜
const Advanced = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <ThemeComponent />
        <MyComponent />
      </section>
    </Suspense>
  </ErrorBoundary>
)

export default Advanced