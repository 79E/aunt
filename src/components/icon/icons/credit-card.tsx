
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
  className="aunt-icon aunt-icon-credit-card"
    {...props}
>
  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
  <line x1="1" y1="10" x2="23" y2="10" />
</svg>

  );
  
  const CreditCard = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="CreditCard" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  CreditCard.displayName = 'CreditCard';
  
  export default CreditCard;
  