import React, { useEffect, FunctionComponent, useContext, useState } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';
import { WaterMarkProps } from './types';

export const WaterMark:FunctionComponent<WaterMarkProps> = ((props) => {
    const {
        zIndex = 2000,
        gapX = 24,
        gapY = 48,
        width = 120,
        height = 64,
        rotate = -22,
        image,
        content,
        font
      } = props;
    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('water-mark',prefix);

    const [base64Url, setBase64Url] = useState('');

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ratio = window.devicePixelRatio;
    
        const ctx = canvas.getContext('2d');
    
        const canvasWidth = `${(gapX + width) * ratio}px`;
        const canvasHeight = `${(gapY + height) * ratio}px`;
    
        const markWidth = width * ratio;
        const markHeight = height * ratio;
    
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
    
        if (ctx) {
          if (image) {
            const { width, height, src } = image;
            ctx.translate(markWidth / 2, markHeight / 2);
            ctx.rotate((Math.PI / 180) * Number(rotate));
    
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.referrerPolicy = 'no-referrer';
            img.src = src;
            img.onload = () => {
              ctx.drawImage(
                img,
                (-width * ratio) / 2,
                (-height * ratio) / 2,
                width * ratio,
                height * ratio,
              );
              ctx.restore();
              setBase64Url(canvas.toDataURL());
            };
          } else if (content) {
            const { size = 14, family = 'sans-serif', style = 'normal', weight = 'normal', color = 'rgba(0,0,0,.15)' } = { ...font };
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            // 文字绕中间旋转
            ctx.translate(markWidth / 2, markHeight / 2);
            ctx.rotate((Math.PI / 180) * Number(rotate));
    
            const markSize = Number(size) * ratio;
            ctx.font = `${style} normal ${weight} ${markSize}px/${markHeight}px ${family}`;
            ctx.fillStyle = color;
    
            ctx.fillText(content, 0, 0);
            ctx.restore();
            setBase64Url(canvas.toDataURL());
          }
        } else {
          throw new Error('当前环境不支持Canvas');
        }
      }, [gapX, gapY, rotate, width, height, image, content, font]);

    return (
        <div
            className={joinTrim([
                ns.b(),
                props.fullPage ? ns.m('full') : ''
            ])}
            style={{
                zIndex,
                backgroundSize: `${gapX + width}px`,
                backgroundImage: `url('${base64Url}')`,
            }}
        />
    );
});