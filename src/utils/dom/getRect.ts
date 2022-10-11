import { useEffect, useState } from 'react';
import { useRect } from '../../hooks';

type Key = "top" | "left" | "right" | "bottom" | "width" | "height";

interface Rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}

export const getRect = (element: { current: Element | undefined | null }): Rect => {
  const [rect, setRect] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (element.current) {
        setRect(useRect(element.current));
    }
  }, [element.current]);

  return rect;
};

export default getRect;