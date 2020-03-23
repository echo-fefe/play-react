// Profiler
// 测量渲染一个 React 应用多久渲染一次以及渲染一次的“代价”
// 目的是识别出应用中渲染较慢的部分

// 增加了额外的开支，所以它在生产构建中会被禁用

// 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销

// TODO <Profiler>需要两个 prop
// id(string)
// onRender(function) 当组件树中的组件“提交”更新的时候被 React调用的回调函数

/*
render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
)
*/

// React 会在 profile 包含的组件树中任何组件 “提交” 一个更新的时候调用这个函数。 它的参数描述了渲染了什么和花费了多久
function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
}