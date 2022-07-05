
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
  className="aunt-icon aunt-icon-gift"
  {...props}
>
  <polyline points="20 12 20 22 4 22 4 12" />
  <rect x="2" y="7" width="20" height="5" />
  <line x1="12" y1="22" x2="12" y2="7" />
  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
</svg>

  );
  
  const Gift = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Gift" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Gift.displayName = 'Gift';
  
  export default Gift;
  