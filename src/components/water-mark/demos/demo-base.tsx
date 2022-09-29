import React,{ useState } from 'react';
import { Button, Space, WaterMark } from 'aunt';
import './index.less';

const textProps = {
  content: 'React Aunt',
  font:{
    size:20,
  }
};

const imageProps = {
  image: {
    src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/5910a23e-415a-4dec-bac3-b45e07478a57.png',
    width: 130,
    height: 36,
  }
};

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(textProps);
  const [fullPage, setFullPage] = useState(true);

  return (
    <div className='water-mark-overlay'>
      <Space direction='vertical'>
        <Button onClick={() => setProps(textProps)}>文字水印</Button>
        <Button onClick={() => setProps(imageProps)}>图片水印</Button>
        <Button onClick={() => setFullPage(v => !v)}>
            {fullPage ? '局部区域' : '整个页面'}
        </Button>
      </Space>
      <WaterMark 
        {...props} 
        fullPage={fullPage} 
        gapY={10}
      />
    </div>
  );
};
