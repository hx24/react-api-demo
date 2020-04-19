import React, { Component } from 'react'

export default class extends Component {
  state = {
    list: [
      {
        id: 111,
        name: 'hx111',
      },
      {
        id: 222,
        name: 'hx222',
      },
    ],
  }

  changeName2 = () => {
    this.setState({
      list: [
        {
          id: 111,
          name: 'hx111',
        },
        {
          id: 222,
          name: 'hx222' + Math.random(),
        },
      ],
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeName2}>改变name2</button>
        <ul>
          {this.state.list.map(({ id, name }) => (
            <Item name={name} key={id} />
          ))}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  constructor(p) {
    super(p)
    // key不变，不会重新创建实例
    console.log('constructor', this.props.name)
  }
  render() {
    return <li>{this.props.name}</li>
  }
}
