# Loading 加载
<code src="./demos/demo.tsx" hidden></code>

## 介绍
加载图标，用于表示加载中的过渡状态。
## 使用

```tsx
import { Loading } from "aunt";
```

### 加载类型
通过 type 属性可以设置加载图标的类型，默认为 gap，可选值为 oval，rings，ball，bars，circles，puff，spinning，three，gap。
<code src="./demos/demo-type.tsx" ></code>

### 自定义颜色
通过 color 属性设置加载图标的颜色。
<code src="./demos/demo-color.tsx" ></code>

### 自定义大小
通过 size 属性设置加载图标的大小，默认单位为 px。
<code src="./demos/demo-size.tsx" ></code>


### 加载文案
通过 size 属性设置加载图标的大小，默认单位为 px。
<code src="./demos/demo-text.tsx" ></code>

### 垂直排列
通过 size 属性设置加载图标的大小，默认单位为 px。
<code src="./demos/demo-vertical.tsx" ></code>

### 自定义文本颜色
通过 textColor 属性，可以自定义文本颜色。
<code src="./demos/demo-textColor.tsx" ></code>

### 自定义文本大小
通过 textSize 属性，可以自定义文本大小。
<code src="./demos/demo-textSize.tsx" ></code>


<code src="./demos/demo-all.tsx" inline></code>

## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| type |   统一设置按钮类型   |       `'oval'\|'rings'\|'spinning'\|'three'\|'ball'\|'bars'\| 'circles'\|'gap'\|'puff'`    |`gap`   |
| size | 加载图标大小，默认单位为px |   ` number \| string `  |`30px` |
| color | 颜色 |  `string`  |`-`   | 
| textSize | 文字大小，默认单位为px | `number \| string` |`14px` | 
| textColor | 	文字颜色 |  `string` |`#4e5969`  | 
| vertical | 是否垂直排列图标和文字内容	 |   `boolean` |`false`  |

