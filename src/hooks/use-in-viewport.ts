import { useEffect, useState } from 'react';
import { inBrowser } from '../utils';
import { BasicTarget,getTargetElement } from '../utils/dom/getTargetElement';

type InViewport = boolean | undefined;

function isInViewPort ( el:HTMLElement ): InViewport {
    if (!el) {
        return undefined;
    }

    const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // 获取元素的位置  提供有关元素大小及其相对于视口的位置的信息
    const rect = el.getBoundingClientRect();

    if (rect) {
        const { top, bottom, left, right } = rect;
        return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
    }

    return false;
}

function useInViewport(target: BasicTarget): InViewport {
    const [inViewPort, setInViewport] = useState<InViewport>(() => {
        // 判断 window 是否存在
        if (!inBrowser || !window.IntersectionObserver) return true;
        // 判断 target 是否存在
        const el = getTargetElement(target);
        return isInViewPort(el as HTMLElement);
    });

    useEffect(()=>{
        const el = getTargetElement(target);
        if (!el || !inBrowser || !window.IntersectionObserver) {
            return () => {};
        }

        // 创建监听对象
        const observer = new IntersectionObserver((entries)=>{
            // 回调函数 遍历数组
            entries.some((entry) => {
                // 是否可见了
                if (entry.intersectionRatio > 0) {
                  setInViewport(true);
                  // 停止监听
                  observer.disconnect();
                  return true;
                }
                return false;
            });
        },{
            threshold: [0.0001],
        });

        observer.observe(el as HTMLElement);

        return () => {
            // 停止
            observer.disconnect();
        };

    },[ target ]);

    return inViewPort;
}


export default useInViewport;