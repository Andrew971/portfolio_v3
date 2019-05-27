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
  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path><path fill="none" d="M0 0h24v24H0z"></path>
</StyledDropwdown>);
export default Dropwdown
