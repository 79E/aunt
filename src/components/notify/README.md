# Notify 消息通知

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
主动操作后显示的反馈信息横条，可采用方法调用或者组件调用的方式

## 使用

```tsx
import { Notify } from 'aunt';
```

### 基本用法
<code src="./demos/demo-base.tsx"></code>

### 通知类型
通过`type`属性对默认样式进行修改类型，对自定义样式不生效。
<code src="./demos/demo-type.tsx"></code>

### 自定义通知
可以通过`color` `background` `duration` `content`属性进行一些自定义的内容。
<code src="./demos/demo-custom.tsx"></code>

### 组件调用
通过组件调用 Notify 时，可以通过下面的方式进行注册。

自定义通知组件也可以通过函数调用的方式传递给 `content`
<code src="./demos/demo-components.tsx"></code>


## Notify 参数

| 参数  | 说明 | 类型   | 默认值    |
| ----------- | -------- | -------- | --------- |
| visible     | 是否展示 | `boolean` | `false` |
| content  | 内容  | `string \| React.ReactNode;` | `-`   |
| duration | 持续时长，单位毫秒 | `number` | `3000`|
| type  | 通知类型 | `"success" \| "danger" \| "warning" \| "primary"`  | `danger` |
| color  | 字体颜色 | `string`  | `-`    |
| background  | 背景颜色 | `string`  | `-`    |
| teleport  | 弹出时的的父容器 | `HTMLElement \| () => HTMLElement`  | `body`    |
| onClick  | 击时的回调函数 | `() => void`  | `-`    |
| onEntered  | 全展示后的回调函数 | `() => void`  | `-`    |
| onExited  | 全关闭后的回调函数 | `() => void`  | `-`    |

## Notify 事件

| 事件名  | 说明   | 类型     | 默认值 |
| ------- | ------ | ---------- | ------ |
| Notify.show | 展示提示 | `(option: NotifyOptions \| string) => void;` | `-`  |
| Notify.clear | 关闭提示 | `() => void;` | `-`  |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `(options: NotifyOptions) => void;` | `-`  |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | `() => void;` | `-`  |

```ts
export interface NotifyProps extends BaseTypeProps {
    /** 开关 */
    visible?: boolean;
    /** 持续时间 */
    duration?: number;
    /** 需要展示的内容 */
    content?: string | React.ReactNode;
    /** 通知类型 */
    type?: "success" | "danger" | "warning" | "primary";
    /** 字体颜色 */
    color?: string;
    /** 背景颜色 */
    background?: string;
    /** 弹出时的的父容器 */
    teleport?: TeleportType;
    /** 点击时的回调函数	 */
    onClick?: (event: React.MouseEvent) => void;
    /** 完全展示后的回调函数	 */
    onEntered?: () => void;
    /** 完全关闭后的回调函数 */
    onExited?: () => void;
}

export interface NotifyOptions extends Omit<NotifyProps, 'visible'> {
    /** 关闭时的回调函数	 */
    onClose?: () => void;
}
```

## Notify.Card 参数

| 参数  | 说明 | 类型   | 默认值    |
| ----------- | -------- | -------- | --------- |
| title     | 标题 | `string`     | `-` |
| describe      | 描述   | `string` | `-`       |
| icon    | 图标可填`URL` | `React.ReactNode` | `-`     |
| iconPosition  | 图标位置 可选 `right` | `string`  | `left`    |
| onClick  | 点击卡片事件 | `(event: React.MouseEvent) => void`  | `-`    |

## Notify.Card 样式变量

| 属性名   | 说明     | 默认值 |
| --------------- | -------- | ----------- |
| --aunt-notify-card-margin  | 消息卡片外边距  | `0 var(--aunt-padding-l);`  |
| --aunt-notify-card-padding | 消息卡片内边距 | `var(--aunt-padding-s) var(--aunt-padding-m);` |
| --aunt-notify-card-border-radius | 消息卡片圆角 | `calc(2 * var(--aunt-border-radius-lg));` |
| --aunt-notify-card-background-color | 消息卡片背景色 | `var(--aunt-color-white);` |
| --aunt-notify-card-title-color | 消息卡片标题字体颜色 | `var(--aunt-text-color);` |
| --aunt-notify-card-describe-color | 消息卡片描述字体颜色 | `var(--aunt-gray-8);` |
| --aunt-notify-card-box-shadow | 消息卡片阴影 | `var(--aunt-shadow3-center);` |
| --aunt-notify-card-icon-size | 消息卡片图标大小 | `calc(36 * var(--aunt-hd));` |
| --aunt-notify-card-icon-margin | 消息卡片图标边距 | `var(--aunt-padding-xs);` |