# Transition 动画过渡
<code hidden src="./demos/demo.tsx" ></code>

## 介绍
`react-transition-group` 是 React 官方实现的，用于操作过渡效果的组件库。

此组件是对 `react-transition-group/CSSTransition` 的简单封装。

用法与[react-transition-group/CSSTransition](https://reactcommunity.org/react-transition-group/css-transition)一致。

## 使用
使用 `Transition` 组件的时候`type` `in` `timeout`为必填选项。

`in` 为控制组件显示和隐藏操作的状态

`timeout` 为动画所需要的时间

<code src="./demos/demo-base.tsx" ></code>

### type 属性
`type` 属性为控制内部动画的 className 名称

以上面的演示代码为例，Less样式代码为：

```less
// 内容样式
.demo-transition__card{
    width: 100px; 
    height: 100px;
    margin: 10px 0;
    border-radius:10px;
    background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}

// 动画样式
.fade {
    &-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 500ms, transform 500ms;
    }
    &-exit {
        opacity: 1;
    }
    &-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 500ms, transform 500ms;
    }
}
```

`fade` 是我们在使用 `Transition`组件传入的 type 的值

#### css动画属性

会给我们的内容生成几个 className 

| 动画属性          | 说明                   |
| ----------------- | ---------------------- |
| .xxx-enter        | 入场前加载动画         |
| .xxx-enter-active | 入场后到入场结束的过程 |
| .xxx-enter-done   | 入场动画执行完毕后     |
| .xxx-exit         | 出场前加载动画         |
| .xxx-exit-active  | 出场后到入场结束的过程 |
| .xxx-exit-done    | 出场动画执行完毕后     |

## 参数
> 其他更多参数请参考 [react-transition-group](https://reactcommunity.org/react-transition-group/transition)

| 参数 | 说明 | 类型 | 默认值 | 
| ---- | ---- | ---- | ------ |
| type |   待执行动画css类名前缀   |       `string`    |`必填`   |
| in | 内容是否可见 |   `boolean`  |`必填` |
| timeout | 执行动画时间(毫秒) |     `number \| { appear?: number; enter?: number; exit?: number; }`  |`必填` |
| mountOnEnter | 是否在打开时再加载内容 |   `boolean` |`true` |
| unmountOnExit | 是否在退出时卸载内容 |   `boolean` |`true`|


## 事件
> 动画事件参考 [css-transition event](https://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-onEnter)

| 事件名 | 说明 |  类型 | 默认值 |
| ---- | ---- | ---- | ------ |
|onEnter|在应用“Enter“或“出现“类后立即触发回调|  `(node: HtmlElement, isAppearing: bool) => void` | `()=>{}` |
|onEntering|在应用“Enter-Active“或“出现-活动“类后立即触发回调|  `(node: HtmlElement, isAppearing: bool) => void` |`()=>{}` |
|onEntered|在“Enter”或“出现”类之后立即触发回调移除而done类添加到DOM节点|  `(node: HtmlElement, isAppearing: bool) => void` |`()=>{}` |
|onExit|在应用“Exit”类后立即触发回调|  `(node: HtmlElement) => void` |`()=>{}` |
|onExiting|在应用“Exit-Active”之后立即触发回调|  `(node: HtmlElement) => void` |`()=>{}` |
|onExited|在“退出”类之后立即触发回调。移除而exit-done类添加到DOM节点|  `(node: HtmlElement) => void` |`()=>{}` |
