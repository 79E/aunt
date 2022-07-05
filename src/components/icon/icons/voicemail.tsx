
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
  className="aunt-icon aunt-icon-voicemail"
  {...props}
>
  <circle cx="5.5" cy="11.5" r="4.5" />
  <circle cx="18.5" cy="11.5" r="4.5" />
  <line x1="5.5" y1="16" x2="18.5" y2="16" />
</svg>

  );
  
  const Voicemail = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Voicemail" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Voicemail.displayName = 'Voicemail';
  
  export default Voicemail;
  