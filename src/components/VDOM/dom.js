/** 创建虚拟dom对象 */
export function createElement(type, props, children) {
  let element = new Element(type, props, children)
  return element
}

export class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

/** 将虚拟dom渲染成真实dom 并绑定上属性 */
export function render(element) {
  let realDom
  if (element instanceof Element) {
    // 有可能是字符串节点，所以要判断一下
    const { type, props, children } = element
    realDom = document.createElement(type)
    setAttr(type, realDom, props)
    if (children && children.length) {
      children.forEach(child => {
        realDom.append(render(child))
      });
    }
  } else {
    realDom = element
  }
  return realDom
}

/** 设置真实dom的属性 */
function setAttr(type, realDom, props) {
  for (const key in props) {
    if ((type.toUpperCase() === 'INPUT' || type.toUpperCase() === 'TEXTAREA') && key === 'value') {
      realDom.value = props[key]
    }
    realDom.setAttribute(key, props[key])
  }
}

export function renderDom(realDom, target) {
  target.append(realDom)
}