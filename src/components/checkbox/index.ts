import './styles/index.less';
import _Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';

export type {
    CheckboxInstance,
    CheckboxGroupProps,
    CheckboxProps,
} from './types';

const Checkbox = Object.assign(_Checkbox, { Group: CheckboxGroup });

export { Checkbox, CheckboxGroup };
export default Checkbox;

