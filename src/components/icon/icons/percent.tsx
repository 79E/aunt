
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
  className="aunt-icon aunt-icon-percent"
  {...props}
>
  <line x1="19" y1="5" x2="5" y2="19" />
  <circle cx="6.5" cy="6.5" r="2.5" />
  <circle cx="17.5" cy="17.5" r="2.5" />
</svg>

  );
  
  const Percent = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Percent" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Percent.displayName = 'Percent';
  
  export default Percent;
  