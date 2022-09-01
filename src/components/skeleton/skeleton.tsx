import React, { useMemo, FunctionComponent, useContext } from 'react';
import ConfigProviderContext from '../config-provider/config-provider-context';
import { useNamespace } from '../../hooks';
import { joinTrim, getSizeStyle, addUnit } from '../../utils';
import { SkeletonProps } from './types';

const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

export const Skeleton:FunctionComponent<SkeletonProps> = ((props) => {
    
    const { 
        rowWidth = DEFAULT_ROW_WIDTH, 
        row = 3,
        loading= true,
        animate = true,
        round = true,
        avatarShape = 'round',
    } = props;

    const { prefix } = useContext(ConfigProviderContext);
    const ns = useNamespace('skeleton',prefix);
    
    const varClasses = useMemo(()=>{
        return joinTrim([
            ns.b(),
            animate ? ns.m('animate') : '',
            props.className
        ]);
    },[]);

    const getRowWidth = (index: number) => {

        if (rowWidth === DEFAULT_ROW_WIDTH && index === +row - 1 && index !== 0) {
            return DEFAULT_LAST_ROW_WIDTH;
        }

        if (Array.isArray(rowWidth)) {
            return rowWidth[index];
        }
    
        return rowWidth;
      };

    const getRowHeight = (index: number) => {
        const { rowHeight } = props;
    
        if (Array.isArray(rowHeight)) {
          return rowHeight[index];
        }
    
        return rowHeight;
    };


    function renderAvatar (){
        if (props.avatar) {
            return (
              <div
                className={joinTrim([
                    ns.e('avatar'),
                    ns.m(avatarShape)
                ])}
                style={getSizeStyle(props.avatarSize)}
              />
            );
        }
        return null;
    }

    function renderTitle () {
        if (props.title) {
          const width = addUnit(props.titleWidth);
          const height = addUnit(getRowHeight(0));
          return <div className={joinTrim([
            ns.e('title'),
            round ? ns.m('round') : ns.m('square'),
          ])} style={{ width, height }} />;
        }

        return null;
    };

    function renderRows (){
        const rowChildren = Array(row)
        .fill('')
        .map((_, i) => {
            const width = addUnit(getRowWidth(i));
            const height = addUnit(getRowHeight(i));
            return <div key={i} className={joinTrim([
                ns.e('row'),
                round ? ns.m('round') : ns.m('square')
            ])} style={{ width, height }} />;
        });

        return rowChildren;
    }


    if (!loading) return <>{props.children}</>;
    return (
        <div className={varClasses} style={props.style}>   
            {renderAvatar()}
            <div className={ns.e('content')}>
                {renderTitle()}
                {renderRows()}
            </div>
        </div>
    );
});