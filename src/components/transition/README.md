# Transition 动画过渡

<code hidden src="./demos/demo.tsx" ></code>

## 介绍

`react-transition-group` 是 React 官方实现的，用于操作过渡效果的组件库。

此组件是对 `react-transition-group/Transition` 的简单封装。

用法与[react-transition-group/Transition](https://reactcommunity.org/react-transition-group/transition)一致。

## 使用

使用 `Transition` 组件的时候有一些主要的属性。

`in` 为控制组件显示和隐藏操作的状态

`timeout` 为动画所需要的时间

<code src="./demos/demo-base.tsx" ></code>

### transitionStyles 属性

> 💡**注意：如果为`React`组件如 `<Card />` 则内部必须要接收`style`属性，并设置在需要的位置上。**

`transitionStyles` 属性为设置动画时机所展示的CSS样式

以上面的演示代码为例，动画样式代码为：

```js
const transitionStyles = {
    // 进入时
    entering: { 
        opacity: 1,
        transition: 'opacity 500ms'
    },
    // 已经进入
    entered:  { 
        opacity: 1 
    },
    // 退出时
    exiting:  { 
        opacity: 0,
        transition: 'opacity 500ms'
    },
    // 已经退出
    exited:  { 
        opacity: 0 
    },
    // 未安装进入时
    unmounted: {},
}
```

#### css 动画属性

会给我们的内容生成几个 className

| 动画属性          | 说明                   |
| ----------------- | ---------------------- |
| entering        | 入场前加载动画         |
| entered   | 入场动画执行完毕后     |
| exiting         | 出场前加载动画         |
| exited    | 出场动画执行完毕后     |
| unmounted  | 未安装进入时 |

## 参数

> 其他更多参数请参考 [react-transition-group](https://reactcommunity.org/react-transition-group/transition)

| 参数          | 说明    | 类型   | 默认值 |
| ------------- | ------------------- | ------------ | ------ |
| transitionStyles   | 待执行动画状态的样式 | `TransitionStyles`  | `-` |
| in            | 内容是否可见            | `boolean`            | `false` |
| timeout       | 执行动画时间(毫秒)      | `number \| { appear?: number; enter?: number; exit?: number; }` | `500` |
| mountOnEnter  | 是否在打开时再加载内容  | `boolean`    | `true` |
| unmountOnExit | 是否在退出时卸载内容    | `boolean`  | `true` |

## 事件

> 动画事件参考 [css-transition event](https://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-onEnter)

| 事件名     | 说明                                                             | 类型                                             | 默认值   |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------ | -------- |
| onEnter    | 在应用“Enter“或“出现“类后立即触发回调                            | `(node: HtmlElement, isAppearing: bool) => void` | `()=>{}` |
| onEntering | 在应用“Enter-Active“或“出现-活动“类后立即触发回调                | `(node: HtmlElement, isAppearing: bool) => void` | `()=>{}` |
| onEntered  | 在“Enter”或“出现”类之后立即触发回调移除而 done 类添加到 DOM 节点 | `(node: HtmlElement, isAppearing: bool) => void` | `()=>{}` |
| onExit     | 在应用“Exit”类后立即触发回调                                     | `(node: HtmlElement) => void`                    | `()=>{}` |
| onExiting  | 在应用“Exit-Active”之后立即触发回调                              | `(node: HtmlElement) => void`                    | `()=>{}` |
| onExited   | 在“退出”类之后立即触发回调。移除而 exit-done 类添加到 DOM 节点   | `(node: HtmlElement) => void`        | `()=>{}` |
