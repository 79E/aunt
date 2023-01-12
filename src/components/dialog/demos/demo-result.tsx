import React from 'react';
import { Dialog, Button, Space, Toast } from 'aunt';

export default ()=>(
  <Space direction='vertical'>
    <Button 
      block 
      onClick={async ()=>{
        await Dialog.alert({
          content: '秦时明月汉时关，万里长征人未还。',
          onConfirm: () => {
            console.log('Confirmed')
          },
        })
        Toast('执行完成了')
      }}
    >
      等待 Alert 完成
    </Button>
    <Button 
      block 
      onClick={async ()=>{
        const result = await Dialog.confirm({
          content: '但使龙城飞将在，不教胡马度阴山。',
        })
        if (result) {
            Toast('点击了确认')
        } else {
            Toast('点击了取消')
        }
      }}
    >
      等待 confirm 完成
    </Button>
  </Space>
);
