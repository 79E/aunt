# Pagination 分页
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
数据量过多时，采用分页的形式将数据分隔。

## 使用
```tsx
import { Pagination } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 展示图标
通过定义`icon`可展示默认图标或者自定义图标。
<code src="./demos/demo-icon.tsx"></code>

### 居中显示
通过`justify`可设置对齐方式。
<code src="./demos/demo-center.tsx"></code>

### 自定义分页器
可通过`renderNextField`,`renderPrevField`自定义分页器。
<code src="./demos/demo-custom.tsx"></code>

## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| prevFieldText| 上一页文字 |       `string`    |`上一页`   |
| nextFieldText | 下一页文字 |  `string` |`下一页` |
| icon | 是否显示ICON |  `boolean \| React.ReactNode \| [React.ReactNode, React.ReactNode]` |
| justify | 翻页按钮水平位置，可选center表示居中对齐 | `string` |`side` | 
| current | 当前页码 |  `number` |`1` |
| pageSize | 每页条数 |  `number` |`10` |
| total | 数据总条数 |  `number` |`0` |
| hideOnOnePage | 只有一页时是否隐藏分页器 |  `boolean` |`false` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onChange|数据发生变化|  `(data: PaginationDataParams) => void` |`-` |

```tsx
export interface PaginationDataParams {
    /**
     * 当前页
     * @en Current page
     */
    current: number;
    /**
     * 每页条数
     * @en Number of items per page
     */
    pageSize: number;
    /**
     * 总页数
     * @en Total number of pages
     */
    pageNum: number;
}
```

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-pagination-font-size | 分页数文字大小 | `var(--aunt-font-size-lg);` |
| --aunt-pagination-color | 文字颜色 | `var(--aunt-text-color);` |
| --aunt-pagination-margin | 外边距 | `0 var(--aunt-padding-m);` |
| --aunt-pagination-item-padding | 分页器内边距 | `calc(6 * var(--aunt-hd)) var(--aunt-padding-m);` |
| --aunt-pagination-item-background | 分页器背景颜色 | `var(--aunt-background-color);` |
| --aunt-pagination-item-font-size | 分页器文字大小 | `var(--aunt-font-size-md);` |
| --aunt-pagination-item-border-radius | 分页器圆角 | `var(--aunt-border-radius-md);` |
| --aunt-pagination-disabled-color | 分页器文字颜色 | `var(--aunt-gray-4);` |


