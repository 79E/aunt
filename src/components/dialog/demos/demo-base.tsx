import React from 'react';
import { Dialog, Button, Space } from 'aunt';

export default ()=>(
  <Space direction='vertical'>
    <Button 
      block 
      onClick={()=>{
        Dialog.alert({
          content: '秦时明月汉时关，万里长征人未还。',
          confirmText: '我懂了',
          onConfirm: () => {
            console.log('Confirmed')
          },
        })
      }}
    >
      最简单的小对话框
    </Button>
    <Button 
      block 
      onClick={()=>{
        Dialog.alert({
          content: '但使龙城飞将在，不教胡马度阴山。',
          confirmText: '我懂了',
          onConfirm: () => {
            console.log('Confirmed')
          },
          closeOnOverlay: true
        })
      }}
    >
      点击遮罩层关闭
    </Button>
  </Space>
);
