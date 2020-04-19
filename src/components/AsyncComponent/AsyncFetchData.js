import React, { Component } from 'react'
// import {  } from "react-cache";

// 这里有问题，关于该特性如何在类组件中使用还需再实验下
// export default class AsyncComponent extends Component {
//   state = {
//     num: 0,
//   }

//   getData = () => {
//     // Suspense会捕获抛出的错误，如果检测到抛出的是promise，
//     // Suspense就会认为当前正在加载异步数据，进入loading状态并等待promise的执行
//     throw new Promise((resolve) => {
//       setTimeout(() => {
//         this.setState({
//           num: Math.random(),
//         })
//         resolve()
//       }, 1000)
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.getData}>获取异步数据</button>
//       </div>
//     )
//   }
// }

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

let isRequestCalled = false;
export default function Content() {
  let result = [];
  if (!isRequestCalled) {
    const promise = fetchData();
    isRequestCalled = true;
    throw promise; // Let suspense know
  }
  return <div>Article</div>;
}
