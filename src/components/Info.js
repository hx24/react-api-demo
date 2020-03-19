import React from 'react'
import globalContext from '../globalContext'

export default function Info() {
  return (
    <globalContext.Consumer>
      {context => {
        return (
          <h5
            onClick={() => {
              context.changeName()
            }}
          >
            {context}
          </h5>
        )
      }}
    </globalContext.Consumer>
  )
}
