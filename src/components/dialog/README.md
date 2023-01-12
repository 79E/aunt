# Dialog 对话框
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。

## 使用

```tsx
import { Dialog } from 'aunt';
```

### 基本用法
<code src="./demos/demo-base.tsx"></code>

### 操作按钮
<code src="./demos/demo-action.tsx"></code>

### 自定义样式
<code src="./demos/demo-style.tsx"></code>

### 获取结果
<code src="./demos/demo-result.tsx"></code>

### 声明式
<code src="./demos/demo-dialog.tsx"></code>


## 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 显示隐藏开关 | `boolean` | `-` |
| header | 自定义头部 | `React.ReactNode` | `-` |
| headerImage | 显示头部图片（优先级低于 header） | `string` | `-` |
| title | 操作按钮列表 | `string \| React.ReactNode;` | `-` |
| content | 操作按钮列表 |`string \| React.ReactNode;` | `-` |
| contentClass | 操作按钮列表 | `string` | `-` |
| contentStyle | 操作按钮列表 | `React.CSSProperties` | `-` |
| actions | 操作按钮列表 | ` DialogAction[]` | `[]` |
| renderAction | 操作按钮列表 | `React.ReactNode` | `-` |
| direction | 操作按钮列表 | `'horizontal' \| 'vertical'` | `horizontal` |
| closeOnAction | 操作按钮列表 | `boolean` | `false` |
| closeOnOverlay | 操作按钮列表 | `boolean` | `false` |
| overlayClass | 操作按钮列表 | `string` | `-` |
| overlayStyle | 操作按钮列表 | `React.CSSProperties` | `-` |
| onAction | 操作按钮列表 | `(action: DialogAction, index: number) => void;` | `-` |
| onClose | 操作按钮列表 | ` () => void;` | `-` |
| afterClose | 操作按钮列表 | `() => void;` | `-` |
| afterShow | 操作按钮列表 | `() => void;` | `-` |

### DialogAction

| 属性      | 说明    | 类型    | 默认值  |
| --------- | ----- | -------- | ------- |
| bold      | 是否文字加粗   | `boolean`    | `false` |
| className | `Action` 类名  | `string`      | `-` |
| danger    | 是否为危险状态 | `boolean`        | `false` |
| disabled  | 是否为禁用状态 | `boolean`    | `false` |
| key       | 唯一标记       | `string \| number`   | `-` |
| onClick   | 点击时触发     | `(event: React.MouseEvent) => void \| Promise<void>` | `-` |
| style  | `Action` 样式  | `React.CSSProperties`  | `-` |
| text   | 标题   | `React.ReactNode`    | `-` |

## 指令式

可以通过指令式的方式使用 `Dialog`：

### Dialog.show

```ts | pure
const handler = Dialog.show(props)
```

可以通过调用 `Dialog` 上的 `show` 方法直接打开对话框，其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。

当对话框被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性  | 说明       | 类型         | 默认值 |
| ----- | ---------- | ------------ | ------ |
| close | 关闭对话框 | `() => void` | `-`  |
| config | 修改对话框配置 | `(DialogProps) => void` | `-`  |

`show` 只是一个很基础的方法，在实际业务中，更为常用的是下面的 `alert` 和 `confirm` 方法：

### Dialog.alert

`alert` 接受的参数同 `show`，但不支持 `closeOnAction` `actions` 属性，它的返回值不是一个控制器对象，而是 `Promise<void>`。

此外，它还额外支持以下属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| confirmText | 确认按钮的内容 | `ReactNode` | `'我知道了'` |
| onConfirm | 点击确认按钮时触发 | `() => void \| Promise<void>` | - |

### Dialog.confirm

`confirm` 接受的参数同 `show`，但不支持 `closeOnAction` `actions` 属性，它的返回值不是一个控制器对象，而是 `Promise<boolean>`。

此外，它还额外支持以下属性：

| 属性        | 说明               | 类型                          | 默认值   |
| ----------- | ------------------ | ----------------------------- | -------- |
| cancelText  | 取消按钮的内容     | `ReactNode`                   | `'取消'` |
| confirmText | 确认按钮的内容     | `ReactNode`                   | `'确认'` |
| onCancel    | 点击取消按钮时触发 | `() => void \| Promise<void>` | -        |
| onConfirm   | 点击确认按钮时触发 | `() => void \| Promise<void>` | -        |

需要注意的是，对于**指令式**创建出来的 Dialog，**并不会感知父组件的重渲染和其中 state 的更新**，因此下面这种写法是完全错误的：

```tsx
export default function App() {
  const [captcha, setCaptcha] = useState<string>("");
  const showCaptcha = () => {
    return Dialog.confirm({
      title: "短信验证",
      content: (
        <div>
          <Input
            placeholder="请输入验证码"
            value={captcha} // App 中 captcha 的更新是不会传递到 Dialog 中的
            onChange={(v) => {
              setCaptcha(v)
            }}
          />
        </div>
      )
    });
  };
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  );
}
```

如果你需要在 Dialog 中包含很多复杂的状态和逻辑，那么可以使用声明式的语法，或者考虑自己将内部状态和逻辑单独封装一个组件出来。

### Dialog.clear

可以通过调用 `Dialog` 上的 `clear` 方法关闭所有打开的对话框，通常用于路由监听中，处理路由前进、后退不能关闭对话框的问题。


## 样式变量

| 属性名 | 说明 | 默认值    |
| -------------- | ---------- | ------------- |
| --aunt-dialog-z-index | zindex层级  | `var(--aunt-z-index-full-screen);`   |
| --aunt-dialog-width | 对话框宽度  | `calc(280 * var(--aunt-hd));`   |
| --aunt-dialog-background-color | 对话框背景颜色  | `var(--aunt-white-color);`   |
| --aunt-dialog-border-radius | 对话框圆角大小  | `var(--aunt-border-radius-lg);`   |
| --aunt-dialog-padding | 对话框内边距  | `var(--aunt-padding-l);`   |
| --aunt-dialog-header-font-size | 对话框头部文字大小  | `var(--aunt-font-size-lg);`   |
| --aunt-dialog-header-color | 头部文字颜色  | `var(--aunt-text-color);`   |
| --aunt-dialog-font-weight | 重要文字加粗  | `var(--aunt-font-weight-bold);`   |
| --aunt-dialog-horizontal-margin | 横向边距  | `var(--aunt-padding-l);`   |
| --aunt-dialog-vertical-margin | 竖向边距  | `var(--aunt-padding-sm);`   |
| --aunt-dialog-content-max-height | 内容最大高度  | `70vh`   |
| --aunt-dialog-content-font-size | 内容文字大小  | `var(--aunt-font-size-md);`   |
| --aunt-dialog-content-line-height | 内容文字行高  | `var(--aunt-line-height-sm);`   |
| --aunt-dialog-action-border | 操作边框  | `var(--aunt-border-width-base) solid var(--aunt-gray-2);`   |
| --aunt-dialog-action-font-size | 操作文字大小  | `var(--aunt-font-size-lg);`   |
| --aunt-dialog-action-color | 操作文字颜色  | `var(--aunt-primary-color);`   |
| --aunt-dialog-action-danger-color | 危险操作文字颜色  | `var(--aunt-danger-color);`   |
| --aunt-dialog-action-disabled-color | 禁用操作文字颜色  | `var(--aunt-active-color);`   |
