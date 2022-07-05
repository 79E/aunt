
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
  className="aunt-icon aunt-icon-help-circle"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <line x1="12" y1="17" x2="12.01" y2="17" />
</svg>

  );
  
  const HelpCircle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="HelpCircle" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  HelpCircle.displayName = 'HelpCircle';
  
  export default HelpCircle;
  