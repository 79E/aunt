import './styles/index.less';
import { Steps } from './steps';
import { StepsItem } from './steps-item';

export type {
    StepsProps
} from './types';

const StepsNamespace = Object.assign(Steps, { Item: StepsItem });
export { StepsNamespace as Steps, StepsItem };
