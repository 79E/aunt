
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
  className="aunt-icon aunt-icon-disc"
    {...props}
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="3" />
</svg>

  );
  
  const Disc = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Disc" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Disc.displayName = 'Disc';
  
  export default Disc;
  