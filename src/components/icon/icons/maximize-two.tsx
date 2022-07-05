
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
  className="aunt-icon aunt-icon-maximize-two"
  {...props}
>
  <polyline points="15 3 21 3 21 9" />
  <polyline points="9 21 3 21 3 15" />
  <line x1="21" y1="3" x2="14" y2="10" />
  <line x1="3" y1="21" x2="10" y2="14" />
</svg>

  );
  
  const MaximizeTwo = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="MaximizeTwo" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  MaximizeTwo.displayName = 'MaximizeTwo';
  
  export default MaximizeTwo;
  