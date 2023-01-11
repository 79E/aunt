import React from 'react';
import { NavBar } from 'aunt';
export default () => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <NavBar
      title='基础用法'
      bottomLine={false}
      style={{
        background: 'transparent',
        color: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
      }}
    />
    <img
      style={{
        width: '100%',
        height: 'auto',
      }}
      src='https://p1.xywm.ltd/2023/01/11/63be1fc150f8c.jpg'
      alt=''
    />
  </div>
);
