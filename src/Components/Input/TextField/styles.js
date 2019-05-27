import styled from "styled-components";
import {Media} from '../../Config';
const commonPadding = '0.5rem';

export const Container = styled.div `
 *::before, *::after {
  box-sizing: border-box;
  }
  width:100%;
  display: flex;
  flex-flow: column nowrap;
  align-items:flex-start;


& .textfield-secondary-box{
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
    align-items:center;
  padding: ${commonPadding} ;
  width:100%;
  height:auto;
  & .textfield-helper-text {
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.1875em;
  font-size: 1rem;
}
  & .textfield-counter-text {
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.1875em;
  font-size: 1rem;

    &--error {
      color: rgba(250, 0, 0, 0.54);
    }
}
  & .textfield-error-text {
  color: rgba(250, 0, 0, 0.54);
  line-height: 1.1875em;
  font-size: 1rem;
}

}

`;

export const ContainerField = styled.div `
 *::before, *::after {
  box-sizing: border-box;
  }
  width:100%;
  display: flex;
  flex-flow: row nowrap;
  /* flex-flow: ${props=>props.position === 'start'?'row nowrap':'row-reverse nowrap'}; */
  justify-content:flex-start;
  align-items:center;
  height: 7.5vh;
  background: lightgrey;
  border-radius: .5rem .5rem 0 0;
  position:relative;
  ::before {
    left: 0;
    color: transparent;
    right: 0;
    bottom: 0;
    content: "testest";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
    z-index:1;
}

::after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
    pointer-events: none;
    border-bottom: 2px solid #1976d2;
    z-index:2;

}

  &:focus-within{
    &::before{
    transform: scaleX(1);
    border-bottom-color:rgba(0, 0, 0, 0);
    }
    &::after{
    transform: scaleX(1);

    }
}

& .textfield_icon{
 

    &--leading {
      opacity: .42;
      display: flex;
    width: 15%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 100%;
    padding: ${commonPadding};
    }
    &--error {
      display: flex;
    width: 15%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 100%;
    padding: ${commonPadding};
    }
}

&.invalid-input {

&::after{
  border-bottom-color:rgba(250, 0, 0, 0.54);
  transform: scaleX(1);

}
}

`;

export const ContainerInput = styled.div `
  *::before, *::after {
  box-sizing: border-box;
  }
  width:100%;
  display: flex;
  position: relative;
  min-width: 0;
  flex-direction: column;
  align-items:flex-start;
  height: 7.5vh;

& label {
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.1875em;
  bottom: 15%;
  left: 0;
  padding: ${commonPadding} ;
  position: absolute;
  /* transform: translate(0em, 45%) scale(1); */
  transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1);
  opacity:0.5;
  pointer-events:none;
}

input:focus ~ label, input:required:valid ~ label{
    transform: translate(-10%, -40%) scale(0.75);
    color:#5264AE;
}

&.invalid-input {

  & input ~ label{
  transform: translate(-10%, -40%) scale(0.75);
  color:rgba(250, 0, 0, 0.54);
  }
}
&.valid-input {

  & input ~ label{
  transform: translate(-10%, -40%) scale(0.75);
  color:#5264AE;

  }
  /* & input::placeholder {
    opacity:1;
  } */
}

input:required:invalid ~ label{
  
}

input:optional:invalid ~ label{

}

input:optional:valid::placeholder {
/* opacity:1; */
}

  ${Media.desktop `
    /* display:none; */
  `}

`;

export const StyledInput = styled.input `
display: inline-flex;
font-size: 1.5rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
line-height: 1.6em;
margin: 0;
min-width: 0;
bottom: 0;
left: 0;
padding: ${commonPadding} ;
position: absolute;
flex-grow: 1;
  width: 100%;
  outline: none;
  border: 0;
  background: none;
  vertical-align: middle;
-webkit-tap-highlight-color: transparent;
transition: border-bottom-color 200ms ease-in 0ms;

::placeholder{
opacity:0;
transition:opacity .15s ease-in;
}

&:focus::-webkit-input-placeholder {
   opacity:1;
 }

&:focus	{
  outline:none;

}

  ${Media.desktop `
    /* display:none; */
  `}

`;