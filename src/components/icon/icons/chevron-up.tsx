
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
    className="aunt-icon aunt-icon-chevron-up"
      {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>

);

const ChevronUp = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ChevronUp" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;
