import React from 'react';
import styled from "styled-components";

const StyledDropwdown= styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    fill: rgba(0,0,0,.54);
      display: inline-block;
      font-size: 1em;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
      transform: ${props=>props.direction === 'asc'?'rotate(180deg)':'rotate(0'};

    /* &.hide {
      opacity:0
      transition: opacity 0.2s ease-out;
    }

    &.show {
      opacity:1;
      transition: opacity .25s ease-in;
    } */
`;

const Dropwdown = ({color,size,direction,className}) => (<StyledDropwdown
   viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size} direction={direction} className={className}>
   <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
</StyledDropwdown>);
export default Dropwdown
