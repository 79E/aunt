import React from 'react';
import { NoticeBar, AuntIconPocket } from 'aunt';

export default () => (
  <NoticeBar
    color='rgb(0, 180, 42)'
    background='rgb(232, 255, 234)'
    leftIcon={<AuntIconPocket size={20} />}
    content='如果不喜欢这个颜色，自己还可以自定义下颜色。'
    closeable
    onClick={() => {
      console.log('点击了');
    }}
    onClose={() => {
      console.log('关闭了');
    }}
    onReplay={() => {
      console.log('进行重新开始了');
    }}
  />
);
