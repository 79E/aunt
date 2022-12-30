import React, {
  useMemo,
  useRef,
  FunctionComponent,
  useContext,
  useLayoutEffect,
  useCallback,
  useState,
} from 'react';
import { AuntIconX } from '../icon/icons';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace, useTimeout } from '../../hooks';
import { joinTrim } from '../../utils';
import type { NoticeBarProps } from './types';

export const NoticeBar: FunctionComponent<NoticeBarProps> = props => {
  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('notice-bar', prefix);

  const { startTimer } = useTimeout();
  const animationTimer = useRef<number>();

  const [visible, setVisible] = useState(true);

  const { content, speed = 1 } = props;

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const elWidth = useRef({
    wrap: 0,
    content: 0,
  });

  const varStyles = useMemo(() => {
    const styles: React.CSSProperties = {};
    if (props.color) styles.color = props.color;
    if (props.background) styles.backgroundColor = props.background;
    return { ...styles, ...props.style };
  }, [props.color, props.background]);

  const renderLeft = () => {
    if (!React.isValidElement(props.leftIcon)) return null;
    return <div className={ns.m('left')}>{props.leftIcon}</div>;
  };

  const renderRight = () => {
    const element = (e: React.ReactNode) => <div className={ns.m('right')}>{e}</div>;
    if (props.closeable) {
      const size = contentRef.current?.clientHeight || 20;
      const node = React.cloneElement(
        React.isValidElement(props.closeIcon) ? props.closeIcon : <AuntIconX size={size} />,
        {
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            setVisible(false);
            props.onClose?.(e);
          },
        }
      );
      return element(node);
    }
    if (React.isValidElement(props.rightIcon)) return element(props.rightIcon);
    return null;
  };

  // 判断是否可以进行滚动
  const isScrollable = useCallback(() => {
    if (!wrapRef.current || !contentRef.current) return false;
    if (!props.scrollable && props.wrapable) return false;
    const is = wrapRef.current!.clientWidth >= contentRef.current!.clientWidth;
    if (!props.scrollable && is) return false;
    return true;
  }, [wrapRef, contentRef]);

  const getOffsetX = (ref: React.MutableRefObject<HTMLParagraphElement | null>) => {
    const { transform } = ref.current!.style;
    const ret = transform.split('px')[0].split('(')[1] || 0;
    return ret;
  };

  const setOffsetX = (
    num: string | number,
    ref: React.MutableRefObject<HTMLParagraphElement | null>
  ) => {
    ref.current!.style.transform = `translateX(${num}px)`;
  };

  // 清除动画
  const clearAnimationFrame = () => {
    if (animationTimer.current) window.cancelAnimationFrame(animationTimer.current);
  };

  // 移动方法
  const move = (endPosition: number) => {
    const contentOffsetX = getOffsetX(contentRef);
    // 当移动到最左边后 把位置改到右边去 开启新一轮的循环
    if (contentOffsetX <= endPosition) {
      props.onReplay?.();
      clearAnimationFrame();
      setOffsetX(elWidth.current.wrap, contentRef);
      move(endPosition);
      return;
    }
    setOffsetX(Number(contentOffsetX) - speed, contentRef);
    animationTimer.current = window.requestAnimationFrame(() => {
      move(endPosition);
    });
  };

  // 开始执行动画
  const startMove = () => {
    elWidth.current = {
      wrap: wrapRef.current!.offsetWidth || 0,
      content: contentRef.current!.offsetWidth || 0,
    };

    animationTimer.current = window.requestAnimationFrame(() => {
      move(-elWidth.current.content);
    });
  };

  useLayoutEffect(() => {
    if (isScrollable() && visible) startTimer(startMove, props.delay);
    return () => {
      clearAnimationFrame();
    };
  }, [props, wrapRef, contentRef, visible]);

  if (!visible) return null;

  return (
    <div className={joinTrim([ns.b(), props.className])} style={varStyles} onClick={props.onClick}>
      {renderLeft()}
      <div
        className={ns.e('box')}
        ref={wrapRef}
        style={{
          whiteSpace: !isScrollable() && props.wrapable ? 'normal' : 'nowrap',
        }}
      >
        <p ref={contentRef}>{content}</p>
      </div>
      {renderRight()}
    </div>
  );
};
