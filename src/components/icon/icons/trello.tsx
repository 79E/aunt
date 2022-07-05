
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (

    <svg
  viewBox="0 0 24 24"
  width="24"
  height="24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-trello"
  {...props}
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <rect x="7" y="7" width="3" height="9" />
  <rect x="14" y="7" width="3" height="5" />
</svg>

  );
  
  const Trello = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Trello" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Trello.displayName = 'Trello';
  
  export default Trello;
  