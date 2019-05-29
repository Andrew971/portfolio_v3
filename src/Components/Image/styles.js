import styled, {keyframes} from "styled-components";
import {Media} from '../Config';

const progressiveReveal = keyframes`
	0% { transform: scale(1.05); opacity: 0; }
	100% { transform: scale(1); opacity: 1; }
`;


export const StyledLink =  styled.a`

  position: relative;
  display: block;
  overflow: hidden;
  outline: none;
  width:100%;
  height:100%;



&:not(.replace) {
  cursor: default;
}

& img {
  display: block;
  width: auto;
  max-width: none;
  height: 100%;
  border: 0 none;
}

& img.preview {
  filter: blur(2vw);
  transform: scale(1.05);
}

& img.reveal {
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform, opacity;
  animation: ${progressiveReveal} 1s ease-out;
}

${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;

export const StyledImage =  styled.img`
  background-color :grey;
  max-width:100vw;
  max-height:100vh;
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;
  transition: all .5s ;
  
  &.preview {
    filter: blur(2vw);
    transform: scale(1.05);
  }
  &.reveal {
  will-change: transform, opacity;
  animation: ${progressiveReveal} 1s ease-out;
  }

  ${Media.phone `

  `}

  ${Media.tablet `

  `}

  ${Media.laptop `

  `}

  ${Media.desktop `



  `}

`;

