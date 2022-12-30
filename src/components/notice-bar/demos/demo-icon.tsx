import React from 'react';
import { NoticeBar, Space, AuntIconBell, AuntIconXCircle, Toast } from 'aunt';

export default () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <NoticeBar leftIcon={<AuntIconBell size={20} />} content='自定义了一下左侧的图标。' />
      <NoticeBar closeable content='打开了右侧的关闭按钮。' />
      <NoticeBar
        closeable
        closeIcon={<AuntIconXCircle size={20} />}
        content='自定义了一下右侧的关闭图标。'
      />
      <NoticeBar
        rightIcon={
          <div
            style={{
              width: 50,
              height: 20,
              background: '#ff7d00',
              borderRadius: 20,
              color: '#ffffff',
              fontSize: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              Toast('点我干啥～');
            }}
          >
            点我
          </div>
        }
        content='自定义了一下右侧的图标。'
      />
    </Space>
  );
};
