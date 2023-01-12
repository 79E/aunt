import React from 'react';
import { Dialog, Button, Space } from 'aunt';

export default ()=>{
    const [ visible, setVisible ] = React.useState(false);
    return (
        <Space direction='vertical'>
          <Button 
            block 
            onClick={()=>{
                setVisible(true)
            }}
          >
              显示对话框
          </Button>
          <Dialog 
                visible={visible}
                title='订单提醒'
                content='你有一个订单礼品是否收下?'
                onClose={()=>{
                    setVisible(false);
                }} 
                closeOnAction
                closeOnOverlay
                actions={[
                    {
                        key:'ok',
                        text:'收起来',
                    },
                    {
                        key:'no',
                        text:'不要了',
                        bold: true,
                        danger: true
                    }
                ]}
            />
        </Space>
    )
};
