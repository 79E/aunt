import React, { useState } from 'react';
import { Button, Notify } from 'aunt';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button block type='primary' onClick={() => setVisible(v => !v)}>
        组件调用
      </Button>
      <Notify visible={visible}>
        <Notify.Card
          icon='https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_appwx_logo.png'
          title='消息通知标题'
          describe='消息通知的描述，可以多写一些东西。'
          style={{
            marginTop: 20,
          }}
        />
      </Notify>
    </div>
  );
};
