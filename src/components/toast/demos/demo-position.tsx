import React from 'react';
import { Space, Button, Toast } from 'aunt';

export default () => {
  return (
    <Space wrap direction='vertical' style={{ width: '100%' }}>
      <Button
        block
        onClick={() =>
          Toast({
            message: '顶部展示',
            position: 'top',
          })
        }
      >
        顶部展示
      </Button>
      <Button
        block
        onClick={() =>
          Toast({
            type: 'success',
            message: '居中展示',
            position: 'center',
          })
        }
      >
        居中展示
      </Button>
      <Button
        block
        onClick={() =>
          Toast({
            message: '底部展示',
            position: 'bottom',
          })
        }
      >
        底部展示
      </Button>
    </Space>
  );
};
