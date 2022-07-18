# Avatar 头像

## 介绍
用来代表用户或事物，支持图片、图标或字符展示。

## 使用
```tsx
import React from "react";
import { Avatar } from "aunt";

export default () => <Avatar />;
```
### 头像尺寸
通过设置 size 属性来控制头像的尺寸，有三个尺寸可以选择 small、normal、large
```tsx
<Avatar size="small" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
<Avatar size="normal" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
<Avatar size="large" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
```
### 头像形状
通过设置 shape 属性来设置形状 square、round
```tsx
<Avatar shape="square" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
<Avatar shape="round" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
```
### 头像类型
支持三种类型：图片、Icon 以及字符

优先级：图片 => 文本 => Icon(默认`<AuntIconUser />`)
```tsx
<Avatar></Avatar>
<Avatar icon={<AuntIconMeh />}></Avatar>
<Avatar>头</Avatar>
<Avatar url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/099247.jpg"></Avatar>
```
### 图片填充模式
通过设置 fit 属性来设置图片的填充模式
```tsx
<Avatar fit="contain" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/WechatIMG675.jpeg"></Avatar>
<Avatar fit="cover" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/WechatIMG675.jpeg"></Avatar>
<Avatar fit="fill" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/WechatIMG675.jpeg"></Avatar>
<Avatar fit="none" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/WechatIMG675.jpeg"></Avatar>
<Avatar fit="scale-down" url="https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/WechatIMG675.jpeg"></Avatar>
```
### 颜色相关
可设置 background 和 color 控制头像的背景颜色和文本图标颜色
```tsx
<Avatar icon={<AuntIconMeh />} background="#FF7D00" color="#fff"></Avatar>
<Avatar color="#165DFF">文</Avatar>
```

## 参数
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| size |   设置头像尺寸   |   `normal`   |    `'small' ｜ 'normal' ｜ 'large'`    |
| shape | 设置头像形状 | `square` |  ` 'square'｜'round' `  |
| url | 头像图片链接 | `-`  | `string` |  
| color | 文本或图标颜色 |  `#666666`   | `string`  |
| background | 头像背景颜色 |  `#dddddd`  | `string` |
| fit | 图片填充模式 | `cover` | `'contain' ｜ 'cover' ｜ 'fill' ｜ 'none' ｜ 'scale-down'` |

## 事件
| 事件名 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
|onClick|点击头像时触发| `-` | `() => void` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-avatar-size-large | large尺寸 | `60px` |
| --aunt-avatar-size-normal | normal尺寸 | `40px` |
| --aunt-avatar-size-small | small尺寸 | `32px` |
| --aunt-avatar-shape-square | square形状的radius大小 | `4px` |


<code hidden="hidden" src="./demos/demo.tsx"></code>