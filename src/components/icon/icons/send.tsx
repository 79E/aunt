
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (

    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-send"
  {...props}
>
  <line x1="22" y1="2" x2="11" y2="13" />
  <polygon points="22 2 15 22 11 13 2 9 22 2" />
</svg>

  );
  
  const Send = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Send" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Send.displayName = 'Send';
  
  export default Send;
  