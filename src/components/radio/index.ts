import _Radio from './radio';
import RadioGroup from './radio-group';


const Radio = Object.assign(_Radio,{
    Group: RadioGroup
});

export type {
    RadioProps,
    RadioGroupProps
} from './types';

export {
    Radio
};
export default Radio;

