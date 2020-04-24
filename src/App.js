import React from 'react'
import globalContext from './globalContext'
// import Home from './components/Home'
// import Info from './components/Info'
// import Suspense from './components/Suspense'
// import Hoosk from './components/Hoosk'
// import ReactChildren from './components/ReactChildren'
// import Test from './components/Test'
// import Event from './components/Event'
// import Key from './components/Key'
// import SetState from './components/SetState'
// import Portal from './components/Portal'
// import AsyncComponent from './components/AsyncComponent'
import './components/VDOM'

const globalConfig = {
  name: 'hx',
  age: 5,
  changeName() {
    this.name = 'rasck'
    this.age = 8
    console.log(this)
  },
}

export default class extends React.Component {
  state = {
    test: 11111,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        test: 2222,
      })
    }, 1000)
  }
  render() {
    return (
      <globalContext.Provider value={this.state.test}>
        {/* <Home /> */}
        {/* <Info /> */}
        {/* <Suspense /> */}
        {/* <Hoosk /> */}
        {/* <ReactChildren /> */}
        {/* <Test /> */}
        {/* <Event/> */}
        {/* <Key /> */}
        {/* <SetState /> */}
        {/* <Portal /> */}
        {/* <AsyncComponent/> */}
        {/* <VDOM /> */}
      </globalContext.Provider>
    )
  }
}
