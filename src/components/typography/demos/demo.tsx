import React from "react";
import { Typography } from 'aunt'
import { DemoBlock } from 'demos'
import './index.less'

function Demo (){
    return <div className="demo-typography">
        <DemoBlock title="基础用法">
            <Typography.Title>《劝学诗》</Typography.Title>
        <Typography.Text>
    富家不用买良田，<Typography.Text type="danger">书中自有千钟粟。</Typography.Text>{' '}
    <Typography.Text delete>安居不用架高堂，</Typography.Text>书中自有黄金屋。
    <Typography.Text type="primary">出门莫恨无人随，</Typography.Text>书中车马多如簇。<Typography.Text underline>娶妻莫恨无良媒，</Typography.Text>
    书中自有颜如玉。<Typography.Text type="warning">男儿若遂平生志，</Typography.Text>
    <Typography.Text>五经勤向窗前读。</Typography.Text>
</Typography.Text>
        </DemoBlock>
        <DemoBlock title="文本类型">
            <Typography.Text type="danger">一生大笑能几回</Typography.Text>
            <Typography.Text type="primary">斗酒相逢须醉倒</Typography.Text>
            <Typography.Text type="warning">花门楼前见秋草</Typography.Text>
            <Typography.Text type="secondary">岂能贫贱相看老</Typography.Text>
        </DemoBlock>
        <DemoBlock title="文本省略">
            <Typography.Text ellipsis>
                春宵一刻值千金，花有清香月有阴。歌管楼台声细细，秋千院落夜沉沉。
            </Typography.Text>
            <br />
            <Typography.Text ellipsis={2}>
                欲送登高千里目，愁云低锁衡阳路。鱼书不至雁无凭，今番欲作悲秋赋。回首西山又日斜，天涯孤客真难度，男儿有泪不轻弹，只因未到伤心处！
            </Typography.Text>
        </DemoBlock>
        <DemoBlock title="标题文本">
            <Typography.Title level={1}>一级测试标题</Typography.Title>
            <Typography.Title level={2}>二级测试标题</Typography.Title>
            <Typography.Title level={3}>三级测试标题</Typography.Title>
            <Typography.Title level={4}>四级测试标题</Typography.Title>
            <Typography.Title level={5}>五级测试标题</Typography.Title>
        </DemoBlock>
        <DemoBlock title="文本链接">
            <Typography.Link>文本Link</Typography.Link>
        </DemoBlock>
    </div>
}

export default Demo