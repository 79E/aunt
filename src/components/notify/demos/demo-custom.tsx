import React from 'react';
import { Button, Space, Notify } from 'aunt';

export default () => (
  <Space wrap direction='vertical' style={{ width: '100%' }}>
    <Button
      type='primary'
      block
      onClick={() =>
        Notify.show({
          content: '消息通知',
          color: '#165eff',
          background: '#fff7d7',
        })
      }
    >
      自定义颜色
    </Button>
    <Button
      type='success'
      block
      onClick={() =>
        Notify.show({
          type: 'success',
          content: '消息通知',
          duration: 5000,
        })
      }
    >
      自定义时长
    </Button>
  </Space>
);
