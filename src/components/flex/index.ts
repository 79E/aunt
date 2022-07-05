import './styles/index.less'
import _Flex from './flex'
import _FlexItem from './flex-item';

const Flex = Object.assign(_Flex, { Item: _FlexItem });

export type {
    FlexProps, FlexItemProps
} from './types';

export default Flex

