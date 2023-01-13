import './styles/index.less';
import { Button as _Button } from './button';
import ButtonGroup from './button-group';

export type { ButtonProps, ButtonType, ButtonSize, ButtonShape } from './types';

const Button = Object.assign(_Button, {
  Group: ButtonGroup,
});

export { Button };
export default Button;
