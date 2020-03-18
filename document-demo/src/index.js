import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import NumberList from './components/NumberList'
import NameForm from './components/NameForm'
import Calculator from './components/Calculator'
// import NumberList from './components/NumberList'


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <div>
    <Clock />
    <Toggle />
    <NumberList numbers={[1,2,3,4]} />
    <NameForm />
    <br/>
    <Calculator />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
