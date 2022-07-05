
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
  className="aunt-icon aunt-icon-git-branch"
  {...props}
>
  <line x1="6" y1="3" x2="6" y2="15" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
  <path d="M18 9a9 9 0 0 1-9 9" />
</svg>

  );
  
  const GitBranch = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="GitBranch" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  GitBranch.displayName = 'GitBranch';
  
  export default GitBranch;
  