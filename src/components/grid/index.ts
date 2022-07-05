import './styles/index.less'
import _Grid from './grid'
import _GridItem from './grid-item'

export type {
    GridDirection,
    GridItemProps,
    GridProps
} from './types';

const Grid = Object.assign(_Grid, { Item: _GridItem });

export default Grid

