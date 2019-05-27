import React from 'react';
import styled from "styled-components";

const StyledSend = styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    margin-right:1rem;
    /* padding: 0.5rem; */
    fill: currentColor;
      display: inline-block;
      font-size: 2rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
`;

const Send = ({color,size}) => (<StyledSend viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
  <g><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/></g>

</StyledSend>);
export default Send
