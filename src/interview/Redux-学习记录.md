---
title: Redux 学习记录
date: 2023-12-01 13:07:38
tags: 前端
---

今天去面试被问到了如何管理复杂的状态，由于我只用过 Context API 管理账户登录这种需要跨组件的状态，这明显不满足复杂状态管理的需要，今天通过官方文档来正式学习一下 Redux。

## Redux是什么？

**Redux是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库** 它以集中式Store的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

## 为什么要用Redux？

Redux帮你管理“全局”状态 - 应用程序中的很多组件都需要的状态。

**Redux提供的模式和工具使你更容易理解应用中的状态何时、何地、为什么、state如何被更新，以及当这些更改发生时你的应用程序逻辑将如何表现。**Redux指导你编写可预测和可测试的代码。

## 何时使用Redux？

+ 应用中有很多state在多个组件中需要使用
+ 应用state会随着时间的推移而频繁更新
+ 更新state的逻辑很复杂
+ 中型和大型代码量的应用，很多人协同开发

不是所有应用都需要Redux，需要考虑在做的应用是否适合。

## Redux库和工具

Redux是一个小型的独立JS库，一般搭配使用：

### React-Redux

它可以让React组件访问state片段和dispatch actions更新store。

### Redux Toolkit

这是官方推荐的编写Redux逻辑的方法。它包含对于构建Redux应用必不可少的包和函数。

### Redux DevTols扩展

可以显示Redux存储中状体随时间变化的历史记录。

## Redux术语和概念

### State管理

一个计数器组件，跟踪组件状态中的数字，点击时增加：

```js
function Counter() {
  // State: counter 值
  const [counter, setCounter] = useState(0)

  // Action: 当事件发生后，触发状态更新的代码
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: 视图定义
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

这个app可以分为以下部分：

+ state： 驱动应用的真实数据源头（状态变量）
+ view： 基于当前状态的视图声明性描述（构建UI）
+ actions： 根据用户输入在应用程序中发生的事件，并触发状态更新

引入概念：**单向数据流**

+ 用state来描述程序在某个时间点的状态
+ 基于state来渲染出View
+ 事件触发时（例如用户单击按钮），state会根据发生的事件进行更新，生成新的state
+ 基于新的state重新渲染View

![单向数据流](https://cn.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

然而，当有**多个组件需要共享和使用相同state时**，可能会变得很复杂，尤其是当这些组件位于应用的不同部分。有时候可以通过“提升state”到父组件来解决，但是并不总是有效。

解决方案就是：从组件中提取共享state，并把它放在组件树之外的一个集中位置。这样，组件树就变成了一个大View，任何组件都可以访问state或触发action，无论他们在树中的哪个位置。

这种机制定义和分离state管理中涉及的概念，并且强制执行并维护view和state之间的独立性，代码变得结构化、易于维护。

Redux背后的基本思想：应用中使用集中式的全局状态来管理，并明确更新状态的模式，让代码具有可预测性。

## 不可变性

JavaScript的对象和数组默认都是可变的。如果创建一个对象，就可以修改其字段的内容。如果创建一个数组，也可以修改其中的内容：

```js
const obj = { a: 1, b: 2 }
// 对外仍然还是那个对象，但它的内容已经变了
obj.b = 3

const arr = ['a', 'b']
// 同样的，数组的内容改变了
arr.push('c')
arr[1] = 'd'
```

这就是改变了数组或者对象的例子，内存中存放的还是对原本对象或数组的引用，但里面的内容变化了。

如果想要不可变的方式来更新，代码必须先复制原来的object/array，然后更新他的复制体。

展开运算符可以实现这个目的：

```js
const obj = {
  a: {
    // 为了安全的更新 obj.a.c，需要先复制一份
    c: 3
  },
  b: 2
}

const obj2 = {
  // obj 的备份
  ...obj,
  // 覆盖 a
  a: {
    // obj.a 的备份
    ...obj.a,
    // 覆盖 c
    c: 42
  }
}

const arr = ['a', 'b']
// 创建 arr 的备份，并把 c 拼接到最后。
const arr2 = arr.concat('c')

// 或者，可以对原来的数组创建复制体
const arr3 = arr.slice()
// 修改复制体
arr3.push('c')
```

**Redux会期望所有状体更新都是使用不可变的方式。**

## 术语

### Action

action是一个具有`type`属性的普通JS对象。

**可以将action视为描述应用中发生的事件**

`type`属性是一个字符串，可以给这个action一个描述性的名字，比如`"todos/todoAdded"`。通常把type叫做“事件名称”，第一部分是这个action的类型，第二部分是发生的具体事件。

action对象可以有其他属性，可以包含有关事件的附加信息。一般放在`payload`中。

一个典型的action对象为：

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: "Buy milk"
}
```

### Action Creator

**action creator**是一个创建并返回一个action对象的函数。它的作用是让你不必每次都手写action对象：

```js
const addTodo = text => {
	return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

## Reducer

**reducer**是一个函数，接受当前的`state`和一个`action`对象，必要时决定如何更新状态，并返回新状态：

Reducer：`(state, action) => newState`

**你可以将reducer视为一个事件监听器，他根据接收到的action（事件）类型处理事件。**

> "Reducer"函数的名字来源是：它和`Array.reduce()`函数使用的回调函数很类似

Reducer必须符合的规则：

+ 只能使用`state`和`action`参数计算新的状态值
+ 禁止直接修改`state`。必须通过复制现有的`state`并对复制的值进行更改的方式,来做*不可变更新*
+ 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

reducer函数内部的逻辑通常遵循：

+ 检查reducer是否关心这个action
  + 如果是，则复制state，用新值更新state副本，然后返回新state
  + 如果否，照原样返回state不变

一个小例子，展示每个reducer应当遵循的步骤：

```js
const initialState = { value: 0 }
function counterReducer(state = initialState, action) {
  //检查 reducer 是否关心这个 action
  if(action.type === 'counter/increment') {
    //如果是，复制 state
    return {
      ...state,
      //使用新值更新 state 副本
      value: state.value + 1
    }
  }
  //否则返回原来的state不变
  return state
}
```

Reducer可以在内部使用任何类型的逻辑来决定新状态是什么，包括`if/else`、`switch`、循环等

## Store

当前 Redux 应用的 state 存在于一个名为 **store**的对象中。

store是通过传入一个 reducer 来创建的，并且有一个名为`getState`的方法，它返回当前的状态值：

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

### Dispatch

Redux store 有一个方法叫做`dispatch`。**更新 state 的唯一方法是调用`store.dispatch()`并传入一个 action 对象**。store 将执行所有 reducer 函数并计算出更新后的 state，调用`getState()` 可以获取新state。

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())

// { value: 1 }
```

dispatch一个action可以形象的理解为“触发一个事件”。发生了一些事情，我们希望 store 知道这件事。 Reducer 就像事件监听器一样，当它们收到关注的 action 后，它就会更新 state 作为响应。

我们通常调用 action creator 来调用 action：

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState()) // { value: 2 }
```

### Selector

**Selector** 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑：

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue) // 2
```

## Redux数据流

早些时候，我们提过“单向数据流”，它描述了更新应用程序的以下步骤序列：

+ State 描述了应用在特定时间点的状况
+ 基于state来渲染视图
+ 当发生事件时，state会根据发生的事件进行更新
+ 基于新的state重新渲染视图

具体来说，对于Redux，我们可以分解成更详细的内容：

+ 初始启动：
  + 使用顶层的root reducer 函数创建 Redux store
  + store 调用一次 root reducer，并将返回值保存为它的初始 `state`
  + 视图首次渲染时，视图组件访问 Redux store 的当前 state， 并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
+ 更新环节：
  + 应用中发生了某些事件，例如用户点击按钮
  + dispatch 一个 action 到 Redux store， 例如 `dispatch({type: 'counter/increment'})`
  + store 用之前的 `state`和当前的`action`再次运行 reducer 函数，并将返回值保存为新的 `state`
  + store 通知所有订阅过的视图，通知他们store发生更新
  + 每个订阅过store数据的视图组件都会检查它们需要的 state 部分是否被更新
  + 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页

## 总结

- Redux 是一个管理全局应用状态的库
  - Redux 通常与 React-Redux 库一起使用，把 Redux 和 React 集成在一起
  - Redux Toolkit 是编写 Redux 逻辑的推荐方式
- Redux 使用 "单向数据流"
  - State 描述了应用程序在某个时间点的状态，视图基于该 State 渲染
  - 当应用程序中发生某些事情时：
    - 视图 dispatch 一个 action
    - store 调用 reducer，随后根据发生的事情来更新 state
    - store 将 state 发生了变化的情况通知 UI
  - 视图基于新 state 重新渲染
- Redux 有这几种类型的代码
  - *Action* 是有 `type` 字段的纯对象，描述发生了什么
  - *Reducer* 是纯函数，基于先前的 state 和 action 来计算新的 state
  - 每当 dispatch 一个 action 后，*store* 就会调用 root reducer
