
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
  className="aunt-icon aunt-icon-search"
  {...props}
>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>

  );
  
  const Search = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Search" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Search.displayName = 'Search';
  
  export default Search;
  