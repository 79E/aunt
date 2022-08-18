import React from "react";
import { Grid } from 'aunt';
import './index.less';

export default ()=>(
    <div className="demo-grid-content">
        <Grid gap={4} column={2}>
            <Grid.Item>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item>4</Grid.Item>
        </Grid>
    </div>
);