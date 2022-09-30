import React, { memo } from 'react';
import { AuntIconCheck } from '../icon/icons';
export const CheckMark = memo(() => {
  return (
    <div style={{
      background:'#165DFF',
      borderTopLeftRadius: 4,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'1px 2px'
    }}>
      <AuntIconCheck size={12} strokeWidth={4} color="#FFF" />
    </div>
  );
});
