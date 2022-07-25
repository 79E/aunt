# useInViewport
## 介绍
用于判断 dom 元素是否在可视范围之内
> Lazyload 懒加载组件基于此 hook 实现

## 使用
使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内
```tsx
import React from 'react';
import { hooks } from 'Aunt';

export default () => {
  const ref = React.useRef();
  const inViewPort = hooks.useInViewport(ref);
  return (
    <div>
      <div ref={ref}>observer dom</div>
      <div style={{ marginTop: 70, color: inViewPort ? '#87d068' : '#f50' }}>
        {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};
```
## 类型
```tsx
function useInViewport(target): boolean;
```

## 参数

| 参数   | 参数           | 默认值 | 类型            |
| ------ | -------------- | ------ | --------------- |
| target | 需要监听的元素 | -      | `HTMLElement \| () => HTMLElement \| React.MutableRefObject ` |

