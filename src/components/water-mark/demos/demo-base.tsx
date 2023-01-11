import React, { useState } from 'react';
import { Button, Space, WaterMark } from 'aunt';
import './index.less';

const textProps = {
  content: 'React Aunt',
  font: {
    size: 20,
  },
};

const imageProps = {
  image: {
    src: 'https://p1.xywm.ltd/2023/01/11/63be1d55a4c31.png',
    width: 100,
    height: 20,
  },
};

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(imageProps);
  const [fullPage, setFullPage] = useState(true);

  return (
    <div className='water-mark-overlay'>
      <Space direction='vertical'>
        <Button onClick={() => setProps(textProps)}>文字水印</Button>
        <Button onClick={() => setProps(imageProps)}>图片水印</Button>
        <Button onClick={() => setFullPage(v => !v)}>{fullPage ? '局部区域' : '整个页面'}</Button>
      </Space>
      <WaterMark {...props} fullPage={fullPage} gapX={0} gapY={0} />
    </div>
  );
};
