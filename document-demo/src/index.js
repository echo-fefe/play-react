import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './modules/Main/index'
import Advanced from './modules/Advanced/index'

// ReactDOM.render(<App />, document.getElementById('root'));

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/advanced">Advanced</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />
      <Route path="/advanced" component={Advanced} />
    </div>
  </Router>
)

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
