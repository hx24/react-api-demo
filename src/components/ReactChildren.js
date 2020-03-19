import React, { Component } from 'react'

// 关于获取props.children的个数，正常情况下是比较困难的，因为children可能是任何类型的，如果用props.children.length获取，当children时'hello world'字符串时，length是11
// React.children.count(props.children) 可以直接获取到children的个数

function Wrapper(props) {
  console.log('children', props.children)
  console.log(
    React.Children.map(props.children, (child, index) => {
      return [index, [index, [index, index, index]]]
    })
  )

  console.log(React.Children.count(props.children)) // 获取正确的children的数量

  return (
    <div>
      this is React.Children demo
      <div>
        {/*  React.Children.map 与普通的Array.map的区别是，即使使用function、字符串进行遍历，也不会报错(是一个字符串时，遍历会执行一次) */}
        {React.Children.map(props.children, (child, index) => {
          if (index < 1) {
            // 忽略第一个child
            return
          }
          return child
        })}
      </div>
    </div>
  )
}

export default function(props) {
  return (
    <Wrapper>
      {/* <div>1</div>
    <div>2</div> */}
      123
    </Wrapper>
  )
}

// React.Children.toArray  将children转为数组
class Sort extends React.Component {
  render() {
    const children = React.Children.toArray(this.props.children)
    // Sort and render the children
    return <p>{children.sort().join(' ')}</p>
  }
}
function Sorted() {
  // 会渲染为三个排好序的字符串  apples    bananas  oranges
  return (
    <Sort>
      {/* We use expression containers to make sure our strings // are passed as three children, not
      as one string */}
      {'bananas'}
      {'oranges'}
      {'apples'}
    </Sort>
  )
}

// 指定Executioner的children只能有一个，如果是多个就直接报错
class Executioner extends React.Component {
  render() {
    return React.Children.only(this.props.children)()
  }
}

function CloneCom(props) {
  return <h2>clone Comp age is {props.age}</h2>
}

