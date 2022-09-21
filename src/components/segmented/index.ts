import './styles/index.less';
import _Segmented from './segmented';
import { SegmentedGroup } from './segmented-group';

const Segmented = Object.assign(_Segmented,{
    Group:SegmentedGroup
});

export type {
    SegmentedProps,
    SegmentedGroupProps
} from './types';

export {
    Segmented
};
export default Segmented;

