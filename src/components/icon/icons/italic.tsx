
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
  className="aunt-icon aunt-icon-italic"
  {...props}
>
  <line x1="19" y1="4" x2="10" y2="4" />
  <line x1="14" y1="20" x2="5" y2="20" />
  <line x1="15" y1="4" x2="9" y2="20" />
</svg>

  );
  
  const Italic = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Italic" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Italic.displayName = 'Italic';
  
  export default Italic;
  