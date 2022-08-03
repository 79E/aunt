import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface TransitionProps extends  BaseTypeProps, Omit<CSSTransitionProps, 'timeout'> {
    /**
     * 待执行动画css类名
     * @en Css classname of the animation to be executed
     */
    type: string;
    /**
     * 内容是否可见
     * @en Whether the content is visible
     */
    in: boolean;
    /**
     * 执行动画时间
     * @en Execute animation time
     */
    timeout: number | { appear?: number; enter?: number; exit?: number };
    /**
     * 是否在打开时再加载内容
     * @en Whether to reload content when it is opened
     * @default true
     */
    mountOnEnter?: boolean;
    /**
     * 是否在退出时卸载内容
     * @en Whether to unmount content on exit
     * @default true
     */
    unmountOnExit?: boolean;
}