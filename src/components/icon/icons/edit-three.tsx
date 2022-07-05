
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (
   
    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-edit-three"
  {...props}
>
  <path d="M12 20h9" />
  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
</svg>

  );
  
  const EditThree = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="EditThree" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  EditThree.displayName = 'EditThree';
  
  export default EditThree;
  