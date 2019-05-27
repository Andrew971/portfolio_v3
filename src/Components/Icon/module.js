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
   <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/><path d="M0 0h24v24H0z" fill="none"/>
</StyledDropwdown>);
export default Dropwdown
