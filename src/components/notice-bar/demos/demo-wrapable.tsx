import React from 'react';
import { NoticeBar } from 'aunt';

export default () => {
  return (
    <NoticeBar
      wrapable
      content='如果文字比较多的情况下也可以开启多行样式这样不会进行滚动的～'
      closeable
    />
  );
};
