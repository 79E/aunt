import React from "react";
import { Typography } from 'aunt';

export default ()=>(
    <>
        <Typography.Text ellipsis>
            春宵一刻值千金，花有清香月有阴。歌管楼台声细细，秋千院落夜沉沉。
        </Typography.Text>
        <br />
        <Typography.Text ellipsis={2}>
            欲送登高千里目，愁云低锁衡阳路。鱼书不至雁无凭，今番欲作悲秋赋。回首西山又日斜，天涯孤客真难度，男儿有泪不轻弹，只因未到伤心处！
        </Typography.Text>
    </>
);