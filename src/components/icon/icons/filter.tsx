
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
  className="aunt-icon aunt-icon-filter"
  {...props}
>
  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
</svg>

  );
  
  const Filter = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Filter" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Filter.displayName = 'Filter';
  
  export default Filter;
  