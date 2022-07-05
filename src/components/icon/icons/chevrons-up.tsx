
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
      className="aunt-icon aunt-icon-chevrons-up"
      {...props}
    >
      <polyline points="17 11 12 6 7 11" />
      <polyline points="17 18 12 13 7 18" />
    </svg>

  );
  
  const ChevronsUp = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ChevronsUp" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ChevronsUp.displayName = 'ChevronsUp';
  
  export default ChevronsUp;
  