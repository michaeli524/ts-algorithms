# 谈谈 Vue 和 React 的区别

相同：

都倡导组件化编程，都有独立的 router 库和状态管理库，都使用虚拟 DOM 高效的更新视图，都使用了 diff 算法

## 数据绑定不同

Vue 支持双向绑定，React 不支持。

## 设计理念不同

Vue 早期开发就尤雨溪大佬，所以定位就是尽可能的降低前端开发的门槛，让更多的人能够更快地上手开发。这就有了 vue 的主要特点：灵活易用的渐进式框架，进行数据拦截/代理，它对侦测数据的变化更敏感、更精确。

React 从一开始的定位就是提出 UI 开发的新思路。背靠大公司 Facebook 的 React，从开始起就不缺关注和用户，而且 React 想要做的是用更好的方式去颠覆前端开发方式。所以 React 推崇函数式编程（纯组件），数据不可变以及单向数据流，当然需要双向的地方也可以手动实现，比如借助 onChange 和 setState 来实现。

## 组件写法差异

React 推荐的做法是 JSX + inline style, 也就是把 HTML 和 CSS 全都写进 JavaScript 中，即 all in js; Vue 推荐的做法是 template 的单文件组件格式 (简单易懂，从传统前端转过来易于理解),即 html,css,JS 写在同一个文件 (vue 也支持 JSX 写法)

1. diff 算法不同
2. 响应式原理不同

Vue

- Vue 依赖收集，自动优化，数据可变。
- Vue 递归监听 data 的所有属性，直接修改。
- 当数据改变时，自动找到引用组件重新渲染。

React

- React 基于状态机，手动优化，数据不可变，需要 setState 驱动新的 state 替换老的 state。当数据改变时，以组件为根目录，默认全部重新渲染，所以 React 中会需要 shouldComponentUpdate 这个生命周期函数方法来进行控制