import React from 'react';
import { Button, Notify, Space } from 'aunt';

export default () => (
  <Space wrap direction='vertical' style={{ width: '100%' }}>
    <Button
      type='primary'
      block
      onClick={() =>
        Notify.show({
          type: 'primary',
          content: '消息通知',
        })
      }
    >
      主要消息
    </Button>
    <Button
      type='success'
      block
      onClick={() =>
        Notify.show({
          type: 'success',
          content: '消息通知',
        })
      }
    >
      成功消息
    </Button>
    <Button
      type='warning'
      block
      onClick={() =>
        Notify.show({
          type: 'warning',
          content: '消息通知',
        })
      }
    >
      警告消息
    </Button>
    <Button
      type='danger'
      block
      onClick={() =>
        Notify.show({
          type: 'danger',
          content: '消息通知',
        })
      }
    >
      危险消息
    </Button>
  </Space>
);
