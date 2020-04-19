import React, { Component } from 'react'

export default class extends Component {
  state = {
    count: 0,
    count2: 0,
    count3: 0,
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    })

    console.log(this.state.count)

    setTimeout(() => {
      // 在定时器里 setState是同步的
      this.setState({
        count: this.state.count + 1,
      })
      console.log('timeout', this.state.count)
    }, 0)
  }

  componentDidMount() {
    // document.body.addEventListener('click', () => {
    //   // 在自定义事件里，setState也是同步的
    //   this.setState({
    //     count: this.state.count + 1,
    //   })
    //   console.log(this.state.count)
    // })
  }

  setCount2 = () => {
    // setState传对象，会被合并 类似于Object.assign
    this.setState({
      count2: this.state.count2 + 1,
    })
    this.setState({
      count2: this.state.count2 + 1,
    })
    this.setState({
      count2: this.state.count2 + 1,
    })
  }

  setCount3 = () => {
    // 传函数  不会被合并
    this.setState((prevState) => {
      return {
        count3: prevState.count3 + 1,
      }
    })
    this.setState((prevState) => {
      return {
        count3: prevState.count3 + 1,
      }
    })
    this.setState((prevState) => {
      return {
        count3: prevState.count3 + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.setCount}>set count</button>
        <div>
          setState传对象的合并：<button onClick={this.setCount2}>count</button>
          {this.state.count2}
        </div>
        <div>
          setState传函数不会合并：<button onClick={this.setCount3}>count</button>
          {this.state.count3}
        </div>
      </div>
    )
  }
}
