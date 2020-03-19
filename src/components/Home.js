import React, { Component } from 'react'
import globalContext from '../globalContext'

export default class extends Component {
  static contextType = globalContext
  constructor(props) {
    super(props)
    this.compRef = React.createRef()
  }
  componentDidMount() {
    console.log('compRef', this.compRef)
  }
  render() {
    return (
      <div>
        <h1>this is home page, hello {this.context}</h1>
        <ForwadComp ref={this.compRef} />
      </div>
    )
  }
}

function Comp() {
  return <div>this is a function component</div>
}

const ForwadComp = React.forwardRef((props, ref) => {
  return (
    <div>
      this is a function component
      <span ref={ref}>ref span</span>
    </div>
  )
})
