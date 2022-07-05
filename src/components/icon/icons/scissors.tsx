
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
  className="aunt-icon aunt-icon-scissors"
  {...props}
>
  <circle cx="6" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
  <line x1="20" y1="4" x2="8.12" y2="15.88" />
  <line x1="14.47" y1="14.48" x2="20" y2="20" />
  <line x1="8.12" y1="8.12" x2="12" y2="12" />
</svg>

  );
  
  const Scissors = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Scissors" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Scissors.displayName = 'Scissors';
  
  export default Scissors;
  