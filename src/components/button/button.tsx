import React, { CSSProperties, FunctionComponent, useContext, useMemo } from 'react';
import { ButtonProps } from './types';
import Loading from '../loading';
import ConfigProviderContext from '../config-provider/config-provider-context';
import ButtonContext from './button-context';
import { useNamespace } from '../../hooks';
import { joinTrim } from '../../utils';

export const Button: FunctionComponent<Partial<ButtonProps>> = props => {
  const {
    color,
    shape = 'default',
    iconPosition = 'left',
    hairline = false,
    loading = false,
    children,
    icon,
    className,
    style,
    loadingText,
    block,
    plain,
    ...rest
  } = props;

  const { parent } = useContext(ButtonContext);

  const currentSize = useMemo(() => props.size || parent?.size || 'normal', [
    props.size,
    parent?.size,
  ]);

  const currentType = useMemo(() => props.type || parent?.type || 'default', [
    props.type,
    parent?.type,
  ]);

  const currentPlain = useMemo(() => !!plain || !!parent?.plain, [plain, parent?.plain]);

  const currentBlock = useMemo(() => !!block || !!parent?.block, [parent?.block, block]);

  const currentIconPosition = useMemo(() => parent?.iconPosition || iconPosition, [
    parent?.iconPosition,
    iconPosition,
  ]);

  const currentDisabled = React.useMemo(() => props.disabled ?? parent?.disabled, [
    parent?.disabled,
    props.disabled,
  ]);

  const { prefix } = useContext(ConfigProviderContext);
  const ns = useNamespace('button', prefix);

  const varClasses = useMemo(() => {
    return joinTrim([
      ns.b(),
      ns.m(currentType),
      ns.m(currentSize),
      shape ? ns.em('shape', shape) : '',
      currentPlain ? ns.m('plain') : '',
      currentBlock ? ns.m('block') : '',
      currentDisabled ? ns.m('disabled') : '',
      hairline ? ns.m('hairline') : '',
      icon ? ns.e('icon') : '',
      loading ? ns.e('loading') : '',
      className,
    ]);
  }, [
    currentBlock,
    currentPlain,
    currentDisabled,
    currentType,
    currentSize,
    shape,
    hairline,
    icon,
    loading,
    className,
  ]);

  const varStyles = useMemo(() => {
    const styles: CSSProperties = {};
    if (color) {
      styles.color = plain ? color : '#fff';
      styles.background = !plain ? color : '#fff';
      if (color?.includes('gradient')) {
        styles.borderWidth = 0;
      } else {
        styles.borderColor = color;
      }
    }
    return { ...style, ...styles };
  }, [plain, color, style]);

  const handleClick = (event: any) => {
    if (!loading && !currentDisabled && props.onClick) {
      props.onClick(event);
    }
  };

  const renderText = () => {
    let text;
    if (loading) {
      text = props.loadingText;
    } else {
      text = props.children || props.text;
    }

    if (text) {
      return <div className={ns.e('text')}>{text}</div>;
    }
    return null;
  };

  const renderLoadingIcon = (position: string) => {
    if (loading) {
      const { loadingSize = '20px', loadingType } = props;
      return (
        <Loading
          size={loadingSize}
          type={loadingType}
          color={currentType === 'default' ? undefined : ''}
          className={ns.em('icon', position)}
        />
      );
    }
    return null;
  };
  const renderIcon = (position: string) => {
    if (props.loading) {
      return renderLoadingIcon(position);
    }

    if (props.icon) {
      return React.cloneElement(props.icon, {
        className: ns.em('icon', position),
      });
    }

    return null;
  };

  return (
    <div className={varClasses} style={{ ...varStyles }} {...rest} onClick={handleClick}>
      {currentIconPosition === 'left' && renderIcon('left')}
      {renderText()}
      {currentIconPosition === 'right' && renderIcon('right')}
    </div>
  );
};
