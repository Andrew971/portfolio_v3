import React from 'react';
import styled from "styled-components";
import {Media} from '../../Config';

const bla  = 'rgba(0,0,0,1)';

const Container =  styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  width:100vw;
  height: 5.5vh;
  
  position:sticky;
  z-index:100000;
  background: rgb(101,171,241); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(101,171,241,1) 0%, rgba(101,171,241,1) 0%, rgba(101,171,241,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(101,171,241,1) 0%,rgba(101,171,241,1) 0%,rgba(101,171,241,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(101,171,241,1) 0%,rgba(101,171,241,1) 0%,rgba(101,171,241,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#65abf1', endColorstr='#65abf1',GradientType=0 ); /* IE6-9 */

  box-shadow: 0px 1px 5px 0px ${bla}, 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);


${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;

export default React.memo((props) => {
  const containerRef = React.useRef()


  const modifyChildren = (child) => {

    const props = {
      className:"test"
    };

    return React.cloneElement(child, props);
  }

  return (
    <Container ref={containerRef} {...props}>
        {
          React.Children.map(props.children, (child) =>  modifyChildren(child))
        }
    </Container>
  )
})