import React from 'react';
import { Button, Notify } from 'aunt';

export default () => (
  <Button block onClick={() => Notify.show('消息通知')}>
    基础用法
  </Button>
);
