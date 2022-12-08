import React from 'react';
import { Space, Button, Toast, AuntIconCheckCircle, AuntIconXCircle } from 'aunt';

export default () => {
  return (
    <Space wrap direction='vertical' style={{ width: '100%' }}>
      <Button
        type='success'
        block
        onClick={() =>
          Toast.success({
            message: '成功提示',
            icon: <AuntIconCheckCircle />,
          })
        }
      >
        成功提示
      </Button>
      <Button
        type='danger'
        block
        onClick={() =>
          Toast.fail({
            message: '失败提示',
            icon: <AuntIconXCircle />,
          })
        }
      >
        失败提示
      </Button>
      <Button
        type='warning'
        block
        onClick={() =>
          Toast.loading({
            message: '加载提示',
            loadingType: 'bars',
          })
        }
      >
        加载提示
      </Button>
      <Button type='primary' block onClick={() => Toast.loading({})}>
        单图标模式
      </Button>
    </Space>
  );
};
