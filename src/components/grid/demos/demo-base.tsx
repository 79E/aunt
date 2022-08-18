import React from "react";
import { Grid } from 'aunt';
import './index.less';

export default ()=>(
    <div className="demo-grid-content">
        <Grid gap={10} column={3} row={3}>
            <Grid.Item row={2} column={2}>1</Grid.Item>
            <Grid.Item>2</Grid.Item>
            <Grid.Item>3</Grid.Item>
            <Grid.Item>4</Grid.Item>
            <Grid.Item column={2}>5</Grid.Item>
        </Grid>
    </div>
);