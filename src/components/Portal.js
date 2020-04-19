import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class extends Component {
  render() {
    return ReactDOM.createPortal(
      // fixed元素要放在body下，有更好的浏览器兼容性（如UC）
      <div
        style={{
          display: 'flex',
          top: 0,
        }}
      >
        portal content
      </div>,
      document.body // 指定将节点渲染到document.body下
    )
  }
}
