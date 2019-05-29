import React from "react";
import styled from "styled-components";
import {useOnClickOutside} from '../../Lib';

const Container = styled.div `
  font-size: 0.75rem;
  display: block;
  height: 56px;
  min-height: 56px;
  padding-right: 2px;
  :last-child {
    padding: 0;
  }
  display: flex;
  position: relative;
  min-height: 56px;
  align-items: center;
`;
const Spacer = styled.div `
  flex: 1 1 100%;
`;

const Typo = styled.div `
flex-shrink: 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

`;
const BoxItem = styled.div `
  margin:  0 1rem;
  color: rgba(0,0,0,1);
  display: inline-flex;
  font-size: inherit;
  flex-shrink: 0;
  border: 0;
  padding: 6px 0 7px;
  min-width: 0;
  flex-grow: 1;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  width: auto;
  overflow: hidden;
  min-height: 1.1875em;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  .dropdown-content {
           position: absolute;
           background-color: #f1f1f1;
           top:0rem;
           min-width: 2rem;
           box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
           z-index: 0;
       }

       .dropdown-content option {
           color: black;
           padding: 12px 16px;
           text-decoration: none;
           display: block;
           cursor:pointer;
       }

       .dropdown-content option:hover {
         background-color: #ddd
       }
`;
const SVG = styled.svg `
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  user-select: none;
  flex-shrink: 0;
  color: inherit;
  pointer-events: none;
`;
const Button = styled.button `
  flex: 0 0 auto;
  width: 48px;
  color: inherit;
  height: 48px;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
  margin: 0;
  border: 0;
  display: inline-flex;
  outline: none;
  position: relative;
  user-select: none;
  align-items: center;
  vertical-align: center;
  justify-content: center;
  -moz-appearance: none;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: rgba(159,159,159,.52);
  }
`;

const TablePagination = React.memo( props=> {
  const containerRef = React.useRef();
  const pageBoxRef = React.useRef();

  const [ state, setState] = React.useState({
    isOpen:false
  });

  useOnClickOutside(pageBoxRef,null,()=>setState(prevState => {
    return {
      isOpen: false
    }
    })
    
  )

    const {onChangePage, page, rowsPerPage, count, onChangeRowsPerPage} = props;

    const {isOpen} = state;

    const end = (page === 0)
      ? rowsPerPage
      : rowsPerPage * (page + 1);

    const origin = (page > 0)
      ? (end - rowsPerPage) + 1
      : page + 1;

    const DisableButtonNext = (end === count)
      ? true
      : false;

    const Text = (total) => {
      while (end <= total) {
        return `${origin} - ${end} of ${total}`
      }
      return `${total} of ${total}`
    }

    return (<Container ref={containerRef}>
      <Spacer/>
      <BoxItem>
        <Typo>Row per page</Typo>
      </BoxItem>
      <BoxItem onClick={() => {
        setState(prevState => {
    return {
      isOpen: !prevState.isOpen
    }
  })
        }}>
        <Typo>{rowsPerPage}</Typo>
        {
          isOpen && <div className="dropdown-content" onClick={(e)=>onChangeRowsPerPage({
                  type: 'CHANGE_ROW_PER_PAGE',
                  payload: e.target.value
                })} ref={pageBoxRef}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </div>
        }
        <SVG>
          <path d="M7 10l5 5 5-5z"></path>
        </SVG>
      </BoxItem>
      <Typo>{Text(count)}
      </Typo>
      <BoxItem>
        <Button onClick={(e)=>onChangePage({
                  type: 'CHANGE_PAGE',
                  payload: e.target.value
                })} value="-1" disabled={page > 0
            ? false
            : true} arial-label="previous">
          <SVG>
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
          </SVG>
        </Button>
        <Button onClick={(e)=>onChangePage({
                  type: 'CHANGE_PAGE',
                  payload: e.target.value
                })} value="1" arial-label="next" disabled={DisableButtonNext}>
          <SVG>
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
          </SVG>
        </Button>
      </BoxItem>
    </Container>);

}
)

export default (TablePagination);
