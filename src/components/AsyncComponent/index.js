import React, { Component } from 'react'
import AsyncFetchData from './AsyncFetchData'

const AsyncComponent = React.lazy(() =>
  import(/* webpackChunkName: 'AsyncComponent' */ './AsyncComponent')
)

// 进入页面后，设置慢网速，点击加载异步组件看效果
export default class extends Component {
  state = {
    show: false,
  }
  loadAsyncComponent = () => {
    this.setState({
      show: true,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.loadAsyncComponent}>加载异步组件</button>
        {this.state.show && (
          <React.Suspense fallback={<div>loading...</div>}>
            <div>
              <div>12312312</div>
              <AsyncComponent />
            </div>
          </React.Suspense>
        )}
        {/* 在将来可以监听子组件异步数据的获取（目前功能还不完善） */}
        <React.Suspense fallback={<div>loading...</div>}>
          <AsyncFetchData />
        </React.Suspense>
      </div>
    )
  }
}

/**
 * Suspense原理：
 *  Suspense会捕获抛出的错误，如果检测到抛出的是promise，
 *  就会认为当前正在加载异步数据，进入loading状态并等待promise的执行
 * 
 *  利用此原理，子组件在获取异步数据的时候将promise抛出，被顶层Suspense监听，那么就可以实现父组件监听所有子组件的loading状态，
 *  目前有个包react-cache是实现此功能的，但是还在开发中，不可用于生产环境使用
 *  https://segmentfault.com/a/1190000019510451
 */
