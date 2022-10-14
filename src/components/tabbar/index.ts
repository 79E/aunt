import './styles/index.less';
import { Tabbar } from './tabbar';
import { TabbarItem } from './tabbar-item';

export type {
    TabbarProps
} from './types';

const TabbarNamespace = Object.assign(Tabbar, { Item: TabbarItem });
export { TabbarNamespace as Tabbar, TabbarItem };
