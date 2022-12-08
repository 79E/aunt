import React from 'react';
import { Space, Button, Toast } from 'aunt';

export default () => {
  return (
    <Space wrap direction='vertical' style={{ width: '100%' }}>
      <Button type='primary' block onClick={() => Toast('文字提示')}>
        文字提示
      </Button>
      <Button type='success' block onClick={() => Toast.success('成功提示')}>
        成功提示
      </Button>
      <Button type='danger' block onClick={() => Toast.fail('失败提示')}>
        失败提示
      </Button>
      <Button type='warning' block onClick={() => Toast.loading('加载提示')}>
        加载提示
      </Button>
    </Space>
  );
};
