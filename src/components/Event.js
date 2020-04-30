import React, { Component } from 'react'

export default class extends Component {

  onWrapperClick = event => {
    event.preventDefault()
    event.stopPropagation()
    console.log('event target', event.target)
    console.log('event currentTarget', event.currentTarget)
    console.log('event constructor', event.__proto__.constructor)

    console.log('nativeEvent target', event.nativeEvent.target)  // 所有的事件都被挂载在document上
    console.log('nativeEvent currentTarget', event.nativeEvent.currentTarget)
    console.log('nativeEvent constructor', event.nativeEvent.__proto__.constructor)


    // event其实是React封装出来的，他的构造函数是SyntheticEvent(可以通过event.__proto__.constructor查看)，模拟出了DOM事件的所有能力
    // event.nativeEvent 是原生事件对象(构造函数是MouseEvent)
    // react处理事件时，所有的事件都被挂载在document上
    // 和DOM事件不一样，和Vue事件也不一样(Vue的事件是直接挂载在自己的节点上)
  }

  onClick = event => {
    // event.preventDefault()
    // event.stopPropagation()
  }

  render() {
    return (
      <div>
        event page
        <div className='aTagWrapper' onClick={this.onWrapperClick} style={{ border: '1px solid red' }}>
          <a href='aaa' onClick={this.onClick}>跳转</a>
        </div>
      </div>
    )
  }
}
