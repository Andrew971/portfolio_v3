import React from 'react';
// import PropTypes from 'prop-types'; import styled from "styled-components";
// import {Media} from '../../Config'; import ErrorIcon from '../icon/error'
import {useLazyDataTable} from '../../Lib';
import {TableRow, TableCell, TableBody} from './styles'
import {stableSort,getSorting} from './method'
import Checkbox from '../lib/Checkbox';
import {SortedTableContext} from '../lib/context'


const TableBodyContainer = React.memo(props => {
  const tableBodyRef = React.useRef();
  const {
    tableState, 
    headColumnName,
    tableAction,
    isSelected,
    onRowClick,
    onCheckBoxClick
  } = React.useContext(SortedTableContext);
  
  const {data, order, orderBy, rowsPerPage, page} = tableState;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  useLazyDataTable(tableBodyRef,'0px',tableState)


  const  onClickHandler = event => {
    onRowClick  && onRowClick(event)
  }
  return (
      <TableBody ref={tableBodyRef}>
        {stableSort(data, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(data => {
            return (
              <TableRow key={data.Key} hover onClick={onClickHandler} className="hide">
                <TableCell
                  onClick={event =>{ 
                    event.stopPropagation()
                    tableAction({
                      type: 'SELECT',
                      payload: {
                        event,
                        Key: data.Key
                      }
                  })
                }}>
                  <Checkbox checked={isSelected(data.Key)}/>
                </TableCell>
                {headColumnName.map(head => {

                  return (
                    <TableCell key={`${data.Key}-${head.label}`} onClick={event =>{ 
                      head.isCheckbox && event.stopPropagation()
                      head.isCheckbox && onCheckBoxClick && onCheckBoxClick(event)
                    }}>
                      {head.isCheckbox
                        ? <Checkbox checked={data[head.label]}/>
                        : data[head.label]
                  }
                    </TableCell>
                  )
                })
              }
              </TableRow>
            )
          })
        }
        {emptyRows > 0 && (
          <TableRow style={{
            height: 49 * emptyRows
          }}>
            <TableCell colSpan={6}/>
          </TableRow>
        )}

      </TableBody>
  )
});

TableBodyContainer.propTypes = {}

// TableBodyContainer.defaultProps = {   pattern: {} };

export default TableBodyContainer;