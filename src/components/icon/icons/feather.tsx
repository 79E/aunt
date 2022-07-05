
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
  className="aunt-icon aunt-icon-feather"
  {...props}
>
  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
  <line x1="16" y1="8" x2="2" y2="22" />
  <line x1="17.5" y1="15" x2="9" y2="15" />
</svg>

  );
  
  const Feather = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Feather" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Feather.displayName = 'Feather';
  
  export default Feather;
  