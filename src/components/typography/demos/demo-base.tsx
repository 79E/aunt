import React from "react";
import { Typography } from 'aunt';

export default ()=>(
    <>
        <Typography.Title>《劝学诗》</Typography.Title>
        <Typography.Text>
            富家不用买良田，<Typography.Text type="danger">书中自有千钟粟。</Typography.Text>{' '}
            <Typography.Text delete>安居不用架高堂，</Typography.Text>书中自有黄金屋。
            <Typography.Text type="primary">出门莫恨无人随，</Typography.Text>书中车马多如簇。
            <Typography.Text underline>娶妻莫恨无良媒，</Typography.Text>书中自有颜如玉。
            <Typography.Text type="warning">男儿若遂平生志，</Typography.Text>
            <Typography.Text>五经勤向窗前读。</Typography.Text>
        </Typography.Text>
    </>
);