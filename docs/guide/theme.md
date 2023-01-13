# 定制主题

得益于 CSS 变量强大而灵活的能力，自定义一套 aunt 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接修在 `:root` 覆盖 CSS 变量就可以了：

```css
:root:root {
  --aunt-primary-color: #722ed1;
  --aunt-success-color: #437004;
  --aunt-danger-color: #ffb65d;
  --aunt-warning-color: #fbe842;
}
```

> 注：为什么要写两个重复的 `:root`？
>
> 由于 aunt 中的主题变量也是在 `:root` 下声明的，所以在有些情况下会由于优先级的问题无法成功覆盖。通过 `:root:root` 可以显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。

当然如果你只是希望对局部的主题进行调整，你可以使用[`ConfigProvider`](/components/config-provider)组件对其进行包裹后查看当前组件的CSS变量进行修改，也可以直接在样式里面修改其全局变量或者该组件的变量。
## 局部调整
**使用CSS变量对其进行修改**
```css
.purple-theme {
    --aunt-primary-color: #722ed1;
}
// or
.purple-theme {
    --aunt-button-background-primary-color: #722ed1;
}
```

```jsx
<div className='purple-theme'>
  <Button type='primary'>Purple</Button>
</div>
```

**使用 [`ConfigProvider`](/components/config-provider) 进行局部组件修改**

```jsx
<ConfigProvider theme={{
    buttonBackgroundPrimaryColor: '#722ed1',
}}>
    <Button type='primary'>Purple</Button>
</ConfigProvider>
```

可以得到这样的一个按钮：

```jsx | preview
/**
 * inline: true
 */

import React from 'react'
import { ConfigProvider, Button } from 'aunt'

export default () => {
  return (
    <ConfigProvider theme={{
        buttonBackgroundPrimaryColor: '#722ed1',
    }}>
        <Button type='primary'>Purple</Button>
    </ConfigProvider>
  )
}
```

以下是 aunt 目前提供的全局性 CSS 变量：

```css
:root {
  --aunt-prefix: @prefix;

  --aunt-hd: @hd;

  --aunt-brand-color: @brand-color;
  // Color Palette
  --aunt-black-color: @black;
  --aunt-white-color: @white;

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

  --aunt-arcoblue-1: @arcoblue-1;
  --aunt-arcoblue-2: @arcoblue-2;
  --aunt-arcoblue-3: @arcoblue-3;
  --aunt-arcoblue-4: @arcoblue-4;
  --aunt-arcoblue-5: @arcoblue-5;
  --aunt-arcoblue-6: @arcoblue-6;
  --aunt-arcoblue-7: @arcoblue-7;
  --aunt-arcoblue-8: @arcoblue-8;
  --aunt-arcoblue-9: @arcoblue-9;
  --aunt-arcoblue-10: @arcoblue-10;

  --aunt-orange-1: @orange-1;
  --aunt-orange-2: @orange-2;
  --aunt-orange-3: @orange-3;
  --aunt-orange-4: @orange-4;
  --aunt-orange-5: @orange-5;
  --aunt-orange-6: @orange-6;
  --aunt-orange-7: @orange-7;
  --aunt-orange-8: @orange-8;
  --aunt-orange-9: @orange-9;
  --aunt-orange-10: @orange-10;

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
  --aunt-padding-l: @padding-l;
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
  --aunt-animation-duration-slow: @animation-duration-slow;
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

  // zIndex
  --aunt-z-index-fixed: @z-index-fixed;
  --aunt-z-index-full-screen: @z-index-full-screen;

  // shadow
  --aunt-shadow-special: @shadow-special; 
  --aunt-shadow1-center: @shadow1-center;
  --aunt-shadow2-center: @shadow2-center;
  --aunt-shadow3-center: @shadow3-center;
}
```

<Alert type="warning">
每个组件都外放了属于这个组件的CSS变量，可以到组件文档页面最下方进行查看。
</Alert>

此外，每个组件也有自己对应的 CSS 全局变量，你可以在它们的文档页面中找到，具体请参阅 [CSS 变量](/guide/token) 章节。
