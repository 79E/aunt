# BackTop 回到顶部  
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
返回页面顶部的操作按钮。

## 使用
```tsx
import { BackTop } from 'aunt';
```

### 基本用法
<code src="./demos/demo-base.tsx"></code>


## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| target |   绑定需要监听其滚动事件的元素   | `HTMLElement \| Window \| Document`    |`-`   |
| icon | 图标元素 |  `React.ReactNode`  |`<AuntIconArrowUp />`   |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop |   `number`  |`400` |
| duration | 回到顶部所需时间（ms） |  `number` |  `400` |
| shape | 设置形状 |   `'square' \| 'round'`  |`square` |
| offset | BackTop 按钮偏移量 |  `number \| string \| [number \| string, number \| string]` |`[20,40]` |
| transitionType | 置动画样式 可参考 transition 组件 | `string` |`-` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick|点击按钮的回调函数|  `(event: React.MouseEvent) => void` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-back-top-size | 按钮大小 | `calc(40 * var(--aunt-hd))` |
| --aunt-back-top-background-color | 背景颜色 | `var(--aunt-background-color);` |
| --aunt-back-top-color | 内容颜色 | `var(--aunt-text-color);` |
| --aunt-back-square-radius | 方形圆角 | `var(--aunt-border-radius-lg);` |