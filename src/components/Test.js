import React, { Component } from 'react'


class Test extends Component {
  state = {
    count: 0,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { count } = nextProps;
    console.log('zhixing', count)
    // 当传入的type发生变化的时候，更新state
    if (count !== prevState.count) {
      return {
        count,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  componentDidMount() {
  }

  render() {
    return <div>{this.state.count}</div>
  }
}

export default class Wrapper extends Component {
  state = {
    count: 1
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            count: Math.random()
          })
        }}>
          改变count
        </button>
        <Test count={this.state.count} />
      </div>
    )
  }
}

