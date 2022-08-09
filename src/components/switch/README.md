# Switch 开关

## 介绍
用于在打开和关闭状态之间进行切换。

## 使用
```tsx
import React from "react";
import { Switch } from "aunt";

export default () => <Switch defaultChecked />;
```

### 禁用状态
通过 disabled 属性来禁用开关，禁用状态下开关不可点击。

```tsx
<Switch defaultChecked disabled></Switch>
<Switch disabled></Switch>
```

### 加载状态
通过 loading 属性设置开关为加载状态，加载状态下开关不可点击。
```tsx
<Switch loading></Switch>
<Switch defaultChecked loading></Switch>
<Switch defaultChecked disabled loading></Switch>
<Switch disabled loading></Switch>
```

### 开关形状
通过 shape 属性设置开关形状。

```tsx
<Switch shape='round'></Switch>
<Switch shape='square'></Switch>
```

### 自定义大小
通过 size 属性自定义开关的大小。

```tsx
<Switch size={20}></Switch>
<Switch size={26}></Switch>
<Switch size={30}></Switch>
```

### 自定义颜色
activeColor 属性表示打开时的背景色，inactiveColor 表示关闭时的背景色。
```tsx
<Switch activeColor="#27C346" defaultChecked></Switch>
<Switch inactiveColor="#FF7D00" activeColor="#14C9C9"></Switch>
```

### 自定义颜色
需要异步控制开关时，可以使用 checked 属性和 onClick 事件，使用 onClick 来控制 checked 属性开或者关。
```tsx
const [checked, setChecked] = useState(false);
const [loading, setLoading] = useState(false);

<Switch 
    checked={checked} 
    loading={loading} 
    onClick={()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setChecked(!checked);
        },2000);
    }}
></Switch>

```


## 参数
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| checked |   开关状态   |   `-`   |    `boolean`    |
| defaultChecked | 默认开关状态 |  `-`   | `boolean`  |
| size |   设置开关尺寸   |   `-`   |    `number \| string`    |
| loading | 加载状态 | `false` |  `boolean`  |
| disabled | 禁用状态 | `false`  | `boolean` |  
| shape | 设置开关形状 | `round` |  ` 'square' \| 'round' `  |
| activeColor | 打开时的背景色 | `-` | `string` |
| inactiveColor | 关闭时的背景色 | `-` | `string` |
| activeValue | 打开时对应的值 | `-` | `any` |
| inactiveValue | 关闭时对应的值 | `-` | `any` |

## 事件
设置 `onClick` 后 `onChange` 将失效。
| 事件名 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
|onClick|点击开关时候触发| `-` | `(e: React.MouseEvent) => void` |
|onChange|开关状态切换时触发| `-` | `(val: any) => void` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-switch-width | 开关宽度 | `2em` |
| --aunt-switch-height | 开关高度 | `1em` |
| --aunt-switch-size | 开关大小 | `calc(30 * var(--aunt-hd))` |
| --aunt-switch-padding | 开关内边距 | `calc(var(--aunt-padding-base) / 2)` |
| --aunt-switch-disabled-opacity | 开关禁用透明度 | `var(--aunt-disabled-opacity)` |
| --aunt-switch-background-color | 开关背景色 | `rgba(120, 120, 128, .16)` |
| --aunt-switch-checked-background-color | 开关选中状态背景色 | `var(--aunt-brand-color)` |
| --aunt-switch-border-radius-round | 开关圆角圆形 | `var(--aunt-border-radius-max)` |
| --aunt-switch-border-radius-square | 开关圆角方形 | `var(--aunt-border-radius-md)` |
| --aunt-switch-transition-duration | 开关动画时间 | `var(--aunt-animation-duration-base)` |
| --aunt-switch-node-background-color | 开关内容颜色 | `var(--aunt-color-white)` |
| --aunt-switch-node-size | 开关内容大小 | `1em` |
| --aunt-switch-node-box-shadow | 开关内容阴影 | `-` |

```less
--aunt-switch-node-box-shadow: 
    0 calc(3 * var(--aunt-hd)) calc(1 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.05),
    0 calc(2 * var(--aunt-hd)) calc(2 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.1), 
    0 calc(3 * var(--aunt-hd)) calc(3 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.05);
```





<code hidden="hidden" src="./demos/demo.tsx"></code>