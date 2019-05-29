import React from 'react';
// import PropTypes from 'prop-types'; import styled from "styled-components";
// import {Media} from '../../Config'; import ErrorIcon from '../icon/error'
// import {useInputValidation,useEventListener} from '../../Lib';
import {TableRow, TableCell, TableHead} from './styles'
import Checkbox from '../lib/Checkbox';
import {SortedTableContext} from '../lib/context'
import SortArrow from '../icon/sortArrow'


const TableHeadContainer = React.memo(props => {
  // const tableBodyRef = React.useRef();
  const {
    tableState, 
    headColumnName,
    tableAction,
  } = React.useContext(SortedTableContext);
  
  const createSortHandler = property => event => {
    tableAction({
      type: 'SORT',
      payload: {
        event,
        property
      }
    });
  };

  const {data,selected, order, orderBy } = tableState;



  return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={selected.length === data.length}
              indeterminate={selected.length > 0 && (selected.length < data.length)}
              onChange={(event) => tableAction({type: 'SELECT_ALL', payload: event.target.checked})}/>
          </TableCell>
          {headColumnName.map(column => {
            return (
              <TableCell key={column.id} onClick={createSortHandler(column.id)}>
                {column.label}
                {(column.label === orderBy) &&<SortArrow direction = {
                  order
                } />}
              </TableCell>
            )
          })
          }
        </TableRow>
      </TableHead>
  )
});

TableHeadContainer.propTypes = {}

// Table.defaultProps = {   pattern: {} };

export default TableHeadContainer;