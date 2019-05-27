import styled from "styled-components";
import {Media} from '../Config';



const Main = styled.main `
width:100%;
/* display:flex; */
/* flex-flow:column nowrap; */
/* align-items:flex-start; */
/* justify-content:flex-start; */
overflow-y:auto;
overflow-x:hidden;
height:94.5vh;
padding:2vh;

${Media.desktop `
  /* display:none; */
`}
`;


export default Main