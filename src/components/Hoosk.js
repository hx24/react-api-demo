import React, { useState, useEffect } from 'react'

export default function() {
  const [name, setName] = useState('hx')

  useEffect(() => {
    // 每次更新时都会执行
    console.log('hooks component update')

    // return () => {
    //   console.log('2222', )
    // }
  }, [name]) // 第二个参数可选，写了第二个参数后，只有当第二个参数中的值发生了变化，才会再次执行

  useEffect(() => {
    console.log('hooks effect 2  bind some event')

    return () => {
      console.log('unbind event')
    }
  }, [])   // 填空数组，或在里面填一个常量 (如111)， 那么该effect只会执行一次，就可以模拟componentDidMount了
  return (
    <div>
      <h4>this is hoos page, my name is {name}</h4>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}
