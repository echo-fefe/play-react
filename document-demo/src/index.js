import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// import Main from './modules/Main/index'
// import Advanced from './modules/Advanced/index'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Main</Link></li>
//         <li><Link to="/advanced">Advanced</Link></li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Main} />
//       <Route path="/advanced" component={Advanced} />
//     </div>
//   </Router>
// )

const Main = lazy(() => import('./modules/Main/index'))
const Advanced = lazy(() => import('./modules/Advanced/index'))

const LazyExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/advanced">Advanced</Link></li>
      </ul>
    </div>

    <hr />

    <Suspense fallback={<div>Loading...</div>}>
      {/* TODO: <Switch>渲染与该地址匹配的第一个子节点 <Route> 或者 <Redirect> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/advanced" component={Advanced} />
      </Switch>
    </Suspense>
  </Router>
)

ReactDOM.render(
  <LazyExample />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
