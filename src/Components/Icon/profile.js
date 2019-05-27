import React from 'react';
import styled from "styled-components";

const StyledDropwdown= styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    fill: currentColor;
      display: inline-block;
      font-size: 1em;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
`;

const Dropwdown = ({color,size}) => (<StyledDropwdown
   viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
   =<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path><path fill="none" d="M0 0h24v24H0z"></path>
</StyledDropwdown>);
export default Dropwdown
