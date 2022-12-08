import React from 'react';
import { Space, Button, Toast } from 'aunt';

export default () => {
  return (
    <Space wrap direction='vertical' style={{ width: '100%' }}>
      <Button
        type='success'
        block
        onClick={() =>
          Toast.success({
            message: '成功提示',
            direction: 'horizontal',
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
            direction: 'horizontal',
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
            direction: 'horizontal',
          })
        }
      >
        加载提示
      </Button>
    </Space>
  );
};
