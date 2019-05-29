import styled from "styled-components";
import {Media} from '../../Config';
// const commonPadding = '0.5rem';

export const Container = styled.table `
min-width:700px;
width: 100%;
margin-top: 1rem;
display: table;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
border-spacing: 0;
border-collapse: collapse;
/* position:relative; */


${Media.desktop `
    /* display:none; */
`}

`;

export const TableHead = styled.thead `
display: table-header-group;
vertical-align: middle;
border-color: inherit;

& th {
  cursor:pointer;
    /* position: sticky;
    position: -webkit-sticky;
    top: 0; */
    background: white;
    z-index: 10;

}

${Media.desktop `
    /* display:none; */
`}

`;

export const TableRow = styled.tr `
color: inherit;
min-height: 5rem;
height: 5rem;
display: table-row;
outline: none;
vertical-align: middle;
visibility:visible;
transition: opacity .4s ease-in-out;
opacity:1;

&.hide{
  visibility:hidden;
  opacity:0;
  transition: opacity .4s ease-in-out;
  /* display:none; */
}

&:hover{
  background-color:${props=>(props.hover?'rgba(186,182,182,.3)':'0')}
}

${Media.desktop `
    /* display:none; */
`}

`;

export const TableCell = styled.th `
display: table-cell;
padding: 4px 56px 4px 24px;
border-bottom: 1px solid rgba(224, 224, 224, 1);
vertical-align: inherit;
color: rgba(0, 0, 0, 0.54);
font-size: 0.95rem;
font-weight: 500;
text-align: ${props=>(props.first?'left':'center')};
flex-direction: row-reverse;
cursor:${props=>(props.first?'pointer':'normal')};

${Media.desktop `
    /* display:none; */
`}

`;

export const TableBody = styled.tbody `

display: table-row-group;


${Media.desktop `
    /* display:none; */
`}

`;