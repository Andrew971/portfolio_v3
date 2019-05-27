import React from 'react';
import styled, {css} from "styled-components"


const isActive = css `
  
  &:hover {
    opacity: 0.7; 
    }

  & .hamburger-inner,
  & .hamburger-inner::before,
  & .hamburger-inner::after {
      background-color: #000;
    }
/* 
   * Spin isActive
*/
  &.hamburger--spin .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
  }
  &.hamburger--spin .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
  }
  &.hamburger--spin .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
  }

    /* 
    * Spin  Reverse isActive
    */
  &.hamburger--spin-r .hamburger-inner {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
  }
  &.hamburger--spin-r .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
  }
  &.hamburger--spin-r .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
  }
`;

const Spin = css `
 
  &:hover {
    opacity: 0.7; 
  }
   /*
   * Spin
   */

  &&.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
  }
  &&.hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; 
    }
  &&.hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
    }

/*
   * Spin Reverse
   */
  &.hamburger--spin-r .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
  }
  &.hamburger--spin-r .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; 
  }
  &.hamburger--spin-r .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
  }

`;

const StyledHamburger = styled.div `
  /* padding: 15px 15px; */
  display: flex;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; 
  
  .hamburger-box {
  width: 40px;
  height: 2rem;
  display: flex;
  justify-content:center;
  position: relative; }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px; 
  }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    ${props=> props.theme?css`
    background-color:${props.isScrolling
    ?props.theme.navBar.color.secondary
    :props.theme.navBar.color.primary
    };
  `:css`
  background-color:${props.isScrolling
    ?"#222"
    :"#fff"};

  `};
    /* background-color: #000; */
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; 
  }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; 
    }
  .hamburger-inner::before {
    top: -10px; 
    }
  .hamburger-inner::after {
    bottom: -10px; 
    }

  ${props => (props.open
    ? isActive
    : Spin
    )}


`;

export default ({...props}) => {
    const {color, width, height, open} = props

    return (
      <StyledHamburger
        open={open}
        color={color}
        width={width}
        height={height}
        {...props}
        className="hamburger--spin"
        >
        <div className="hamburger-box">
          <span className="hamburger-inner"></span>
        </div>
      </StyledHamburger>
    );
  }