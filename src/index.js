import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { makeAutoObservable } from 'mobx'
import { observer } from "mobx-react";
import TimerView from "./TimerView";

// 对应用状态进行建模
class Timer {
    secondsPassed = 0
    constructor() {
        makeAutoObservable(this)
    }
    increase() {
        this.secondsPassed +=1
    }
    reset() {
        this.secondsPassed = 0
    }
}

const timer = new Timer()



ReactDOM.render(
  <React.StrictMode>
    {/*<App  />*/}
      <TimerView timer={timer} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
