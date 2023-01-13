import React from 'react';
import { Button, Space, AuntIconArrowLeft, AuntIconArrowRight, AuntIconRefreshCcw } from 'aunt';

export default () => (
  <Space direction='vertical'>
    <Button.Group plain type='primary' shape='round' disabled>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Button.Group>
    <Button.Group shape='round'>
      <Button type='primary'>按钮1</Button>
      <Button type='primary'>按钮2</Button>
      <Button type='primary'>按钮3</Button>
    </Button.Group>
    <Button.Group type='success' shape='round'>
      <Button type='success'>按钮1</Button>
      <Button type='default'>按钮2</Button>
      <Button type='success'>按钮3</Button>
    </Button.Group>
    <Button.Group shape='round'>
      <Button icon={<AuntIconArrowLeft size={18} />}>上一步</Button>
      <Button icon={<AuntIconRefreshCcw size={18} />}>刷新</Button>
      <Button icon={<AuntIconArrowRight size={18} />} iconPosition='right'>
        下一步
      </Button>
    </Button.Group>
  </Space>
);
