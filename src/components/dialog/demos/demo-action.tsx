import React from 'react';
import { Dialog, Button, Space } from 'aunt';

export default ()=>(
  <Space direction='vertical'>
    <Button 
      block 
      onClick={()=>{
        Dialog.show({
          closeOnAction: true,
          title:'《登鹳雀楼》',
          content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
          actions:[
            {
              key:'show',
              text:'再看看'
            },
            {
              key:'no',
              text:'还不会'
            },
            {
              key:'ok',
              text:'我会了'
            }
          ]
        })
      }}
    >
      多个按钮
    </Button>
    <Button 
      block 
      onClick={()=>{
        Dialog.show({
          direction:'vertical',
          closeOnAction: true,
          title:'《赤壁》',
          content: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
          actions:[
            {
              key:'show',
              text:'再看看'
            },
            {
              key:'no',
              text:'还不会'
            },
            {
              key:'ok',
              text:'我会了'
            }
          ]
        })
      }}
    >
      多个按钮竖向排列
    </Button>
  </Space>
);
