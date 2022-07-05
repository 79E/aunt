
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
  className="aunt-icon aunt-icon-shuffle"
  {...props}
>
  <polyline points="16 3 21 3 21 8" />
  <line x1="4" y1="20" x2="21" y2="3" />
  <polyline points="21 16 21 21 16 21" />
  <line x1="15" y1="15" x2="21" y2="21" />
  <line x1="4" y1="4" x2="9" y2="9" />
</svg>

  );
  
  const Shuffle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Shuffle" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Shuffle.displayName = 'Shuffle';
  
  export default Shuffle;
  