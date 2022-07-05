
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
  className="aunt-icon aunt-icon-git-merge"
  {...props}
>
  <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M6 21V9a9 9 0 0 0 9 9" />
</svg>

  );
  
  const GitMerge = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="GitMerge" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  GitMerge.displayName = 'GitMerge';
  
  export default GitMerge;
  