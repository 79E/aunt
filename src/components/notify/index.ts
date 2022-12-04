import './styles/index.less';
import _Notify from './notify';
import Card from './card';
import { show, setDefaultOptions, resetDefaultOptions, clear } from './controller';

export type { NotifyProps, NotifyCardProps, NotifyOptions } from './types';

const Notify = Object.assign(_Notify, {
  show,
  setDefaultOptions,
  resetDefaultOptions,
  clear,
  Card,
});

export { Notify };
export default Notify;
