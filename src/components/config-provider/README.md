# ConfigProvider 配置

## 介绍

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

也可以应用在某个组件上，单独生效不影响其他组件。

```tsx
import React from "react";
import { ButConfigProviderton } from "aunt";

export default () => <ConfigProvider>
    <App />
</ConfigProvider>;
```


## 定制主题
ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme 属性来配置一些主题变量。

```tsx
import React from "react";
import { ButConfigProviderton, Button } from "aunt";

export default () => <ConfigProvider theme={{
    buttonBackgroundPrimaryColor:'blue',
    ButtonBorderPrimaryColor:'red'
}}>
    <Button type="primary">我变身了</Button>
</ConfigProvider>;
```
> 注意：ConfigProvider 仅影响它的子组件的样式，不影响全局 root 节点。


## 关于主题
React Aunt 组件通过丰富的 CSS 变量 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。
### 实例
以 Button 组件为例，查看组件的样式，可以看到 .aunt-button--primary 类名上存在以下变量：
```css

.aunt-button--primary {
    background-color: var(--aunt-button-background-primary-color);
    color: var(--aunt-color-white);
    border-color: var(--aunt-button-border-primary-color);
}

```

这些变量的默认值被定义在 root 节点上，HTML 文档的任何节点都可以访问到这些变量
```css
:root {
  --aunt-color-white: #fff;
  --aunt-button-background-primary-color: var(--aunt-primary-color);
  --aunt-button-border-primary-color: var(--aunt-primary-color);
}
```
### 自定义 CSS 变量
你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css

/* 添加这段样式后，Primary Button 会变成红色 */
:root { 
    --aunt-button-background-primary-color: red;
    --aunt-button-border-primary-color: red;
}

```

### 全局修改
在修改某个组件的变量的时候，我们需要将暴漏的CSS变量改变下将在 `ConfigProvider` theme 中进行重新赋值。

```css
/* --aunt-button-background-primary-color => buttonBackgroundPrimaryColor */
```


## 基础变量
React Aunt 中的 CSS 变量分为 基础变量 和 组件变量。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。
### 修改变量
由于 CSS 变量继承机制的原因，两者的修改方式有一定差异：

基础变量只能通过 root 选择器 修改，不能通过 ConfigProvider 组件 修改。

组件变量可以通过 root 选择器 和 ConfigProvider 组件 修改。

### 变量列表
可在 `styles/variables.less` 文件中进行查看。

```css
:root {

  --aunt-prefix: @prefix;

  --aunt-hd: @hd;

  --aunt-brand-color: @brand-color;
  // Color Palette
  --aunt-color-black: @black;
  --aunt-color-white: @white;

  --aunt-gray-1: @gray-1;
  --aunt-gray-2: @gray-2;
  --aunt-gray-3: @gray-3;
  --aunt-gray-4: @gray-4;
  --aunt-gray-5: @gray-5;
  --aunt-gray-6: @gray-6;
  --aunt-gray-7: @gray-7;
  --aunt-gray-8: @gray-8;
  --aunt-red: @red;
  --aunt-blue: @blue;
  --aunt-orange: @orange;
  --aunt-green: @green;

  // Gradient Colors
  --aunt-gradient-red: @gradient-red;
  --aunt-gradient-orange: @gradient-orange;

  // Component Colors
  --aunt-primary-color: @primary-color;
  --aunt-success-color: @success-color;
  --aunt-danger-color: @danger-color;
  --aunt-warning-color: @warning-color;
  --aunt-text-color: @text-color;
  --aunt-active-color: @active-color;
  --aunt-active-opacity: @active-opacity;
  --aunt-disabled-opacity: @disabled-opacity;
  --aunt-background-color: @background-color;
  --aunt-background-color-light: @background-color-light;
  --aunt-text-link-color: @text-link-color;

  // Padding
  --aunt-padding-base: @padding-base;
  --aunt-padding-xs: @padding-xs;
  --aunt-padding-s: @padding-s;
  --aunt-padding-sm: @padding-sm;
  --aunt-padding-m: @padding-m; 
  --aunt-padding-md: @padding-md;
  --aunt-padding-lg: @padding-lg;
  --aunt-padding-xl: @padding-xl;

  // Font
  --aunt-font-size-xs: @font-size-xs;
  --aunt-font-size-sm: @font-size-sm;
  --aunt-font-size-md: @font-size-md;
  --aunt-font-size-lg: @font-size-lg;
  --aunt-font-size-xl: @font-size-xl;
  --aunt-font-size-xxl: @font-size-xxl;
  --aunt-font-size-xxxl: @font-size-xxxl;
  --aunt-font-weight-bold: @font-weight-bold;
  --aunt-line-height-xs: @line-height-xs;
  --aunt-line-height-sm: @line-height-sm;
  --aunt-line-height-md: @line-height-md;
  --aunt-line-height-lg: @line-height-lg;
  --aunt-line-height-xl: @line-height-xl;
  --aunt-line-height-xxl: @line-height-xxl;
  --aunt-line-height-xxxl: @line-height-xxxl;
  --aunt-base-font-family: @base-font-family;
  --aunt-price-integer-font-family: @price-integer-font-family;

  // Animation
  --aunt-animation-duration-base: @animation-duration-base;
  --aunt-animation-duration-fast: @animation-duration-fast;
  --aunt-animation-duration-slowest: @animation-duration-slowest;
  --aunt-animation-timing-function-enter: @animation-timing-function-enter;
  --aunt-animation-timing-function-leave: @animation-timing-function-leave;

  // Border
  --aunt-border-color: @border-color;
  --aunt-border-width-base: @border-width-base;
  --aunt-border-radius-sm: @border-radius-sm;
  --aunt-border-radius-md: @border-radius-md;
  --aunt-border-radius-lg: @border-radius-lg;
  --aunt-border-radius-max: @border-radius-max;
}

```


## 参数
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| theme | 自定义主题变量 |   `-`   |    `object`    |
| locale | 自定义语言 | `zhCN` | `object` |
| tag | ConfigProdiver对应的 HTML 节点标签名 | `div` | `string` |

<code hidden="hidden" src="./demos/demo.tsx"></code>