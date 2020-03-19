import React, { Suspense } from 'react'

let data = ''
let promise = null

function getData() {
  if (data) return data
  if (promise) throw promise

  promise = new Promise(resolve => {
    setTimeout(() => {
      data = 'this is suspense data'
      resolve()
    }, 2000)
  })
  throw promise
}

function Comp() {
  const data = getData()

  return <div>{data}</div>
}

export default function() {
  return (
    <Suspense fallback='loading data'>
      <Comp />
    </Suspense>
  )
}
