# Toast 轻提示

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
对操作结果的轻量级反馈，适用于页面内容的变化不能直接反应操作结果时使用。

## 使用

```tsx
import { Toast } from 'aunt';
```

### 基本用法
通过调用`Toast` 方法进行展示提示。
<code src="./demos/demo-base.tsx"></code>

### 自定义图标
可通过`icon` 传入相关内容在自定义图标，可传入图片。
<code src="./demos/demo-icon.tsx"></code>

### 横向排布
通过`direction`属性设置展示的布局，可选`horizontal`进行横向排布。
<code src="./demos/demo-direction.tsx"></code>

### 自定义位置
通过`position`属性设置展示的位置。
<code src="./demos/demo-position.tsx"></code>

## 参数
| 参数      | 说明           | 类型        | 默认值    |
| --------- | -------------- | ---------- | --------- |
| type      | 提示类型       | `'loading' \| 'success' \| 'fail' \| 'info'` | `info` |
| message  | 文本内容，支持通过\n换行 | `number \| string` | `-` |
| duration  | 展示时长(ms)，值为 0 时，toast 不会消失 | `number` | `3000` |
| icon  | 自定义图标 | `React.ReactNode` | `-` |
| iconSize  | 展示时长(ms)，值为 0 时，toast 不会消失 | `number \| string \| ((direction: ToastDirection) => number \| string)` | `-` |
| loadingType  | 展示时长(ms)，值为 0 时，toast 不会消失 | `LoadingType` | `oval` |
| direction  | 图标和文字的排列方式 | `'vertical' \| 'horizontal'` | `vertical` |
| forbidClick  | 是否禁止背景点击 | `boolean` | `false` |
| position  | 位置，可选值为 top bottom | `'top' \| 'center' \| 'bottom'` | `center` |
| teleport  | 轻提示弹出时的的父容器 | `HTMLElement \| (() => HTMLElement)` | `body` |
| onClose  | 关闭时的回调函数  | `() => void` | `-` |
| onOpened  | 完全展示后的回调函数 | `() => void` | `-` |

```tsx
const iconSize = (direction: ToastDirection)=>{ 
    if(direction === 'horizontal') return 24;
    return 40;
}
```

## 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast | 展示提示 | `options \| message` | toast 实例 |
| Toast.info | 展示文字提示 | `options \| message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options \| message` | toast 实例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options \| message` | toast 实例 |
| Toast.clear | 关闭提示 | `-` | `void` |
| Toast.allowMultiple | 允许同时存在多个 Toast | `-` | `void` |
| Toast.setDefaultOptions | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `options` | `void` |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效。<br>传入 type 可以重置指定类型的默认配置 | `-` | `void` |

```tsx
// toast 实例
export type ToastReturnType = {
    /** 动态更新方法 */
    config: React.Dispatch<React.SetStateAction<ToastProps>>
    /** 清除单例toast */
    clear: () => void
}
```

## 样式变量
| 属性名    | 说明       | 默认值     |
| ---------------- | -------- | --------- |
| --aunt-toast-z-index | 显示层级 | `var(--aunt-z-index-full-screen);` |
| --aunt-toast-content-background-color | 背景颜色| `rgba(0,0,0,.8);` |
| --aunt-toast-content-padding | 默认内边距| `var(--aunt-padding-xs) var(--aunt-padding-m);` |
| --aunt-toast-content-border-radius | 默认圆角| `var(--aunt-border-radius-md);` |
| --aunt-toast-content-color | 默认字体颜色| `var(--aunt-white-color);` |
| --aunt-toast-content-top | 默认Top高度| `20%;` |
| --aunt-toast-content-bottom | 默认Bottom高度| `20%;` |
| --aunt-toast-content-text-size | 文字大小| `var(--aunt-font-size-lg);` |
| --aunt-toast-content-text-margin-left | 横行排布的文字左外边距 | `var(--aunt-padding-base);` |
| --aunt-toast-content-text-margin-top | 横行排布的文字左外边距 | `var(--aunt-padding-base);` |