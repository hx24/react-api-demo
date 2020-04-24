import { createElement, render, renderDom } from './dom'

const vDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['apple']),
  createElement('li', { class: 'item' }, ['banana']),
  createElement('li', { class: 'item' }, ['peach']),
])

const realDom = render(vDom)

console.log('vDom', vDom)
console.log('realDom', realDom)

renderDom(realDom, document.getElementById('vdom'))  // html里放了一个div#vdom
// v.innerHTML = 'hello'
// document.getElementById('vdom').append(v)