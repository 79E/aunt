# CountDown 倒计时
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于实时展示倒计时数值，支持毫秒精度。

## 使用
```tsx
import { CountDown } from "aunt";
```

### 基础用法
time 属性表示倒计时总时长，单位为毫秒。
<code src="./demos/demo-base.tsx"></code>


### 自定义格式
通过 format 属性设置倒计时文本的内容。
<code src="./demos/demo-format.tsx"></code>


### 毫秒级渲染
倒计时默认每秒渲染一次，设置 millisecond 属性可以开启毫秒级渲染。
<code src="./demos/demo-millisecond.tsx"></code>


### 自定义样式
通过children自定义倒计时的样式，[react render prop](https://reactjs.org/docs/render-props.html)文档。
<code src="./demos/demo-children.tsx"></code>


### 手动控制
通过 ref 获取到组件实例后，可以调用 start、pause、reset 方法。
<code src="./demos/demo-ref.tsx"></code>


## 参数

| 参数        | 说明                 |       类型      |默认值         |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒  | `number \| string` |`0`        | 
| format      | 时间格式             |  `string`          | `HH:mm:ss` |
| autoStart   | 是否自动开始倒计时   | `boolean`          |  `true`     |
| millisecond | 是否开启毫秒级渲染   |  `boolean`          | `false`    |

### format 格式
| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

## 事件

| 事件名   | 说明             |  类型                        |默认值 |
| -------- | ---------------- | ------ | --------------------------- |
| onFinish | 倒计时结束时触发 |  `-`                         |`-`    | 
| onChange | 倒计时变化时触发 | ` currentTime: CurrentTime` |`-`    | 

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 剩余总时间（单位毫秒） | `number` |
| days         | 剩余天数               | `number` |
| hours        | 剩余小时               | `number` |
| minutes      | 剩余分钟               | `number` |
| seconds      | 剩余秒数               | `number` |
| milliseconds | 剩余毫秒               | `number` |

## 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 说明                                                         | 参数 | 返回值 |
| ----- | ----------------------------------------------------------- | --- | ----- |
| start  | 开始倒计时                                                   | -    | -      |
| pause  | 暂停倒计时                                                   | -    | -      |
| reset  | 重设倒计时，若 `autoStart` 为 `true`，重设后会自动开始倒计时 | -    | -      |

## 类型定义

组件导出以下类型定义：

```ts
import type { CountDownInstance, CountDownCurrentTime } from 'aunt';
```

`CountDownInstance` 是组件实例的类型，用法如下：

```ts
import { useRef } from 'react';
import type { CountDownInstance } from 'aunt';

const countDownRef = useRef<CountDownInstance>(null);

countDownRef.current?.start();
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 说明 | 默认值    | 
| ---------------------------- | -------- | --- |
| --aunt-count-down-text-color  | 文字颜色    |`var(--aunt-text-color)` | 
| --aunt-count-down-font-size   | 文字大小   |`var(--aunt-font-size-md)` | 
| --aunt-count-down-line-height | 文字行高   |`var(--aunt-line-height-md)` | 

## 常见问题

### 在 iOS 系统上倒计时不生效？

如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
