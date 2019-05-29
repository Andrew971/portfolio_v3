import React from 'react';
// import PropTypes from 'prop-types'; import styled from "styled-components";
// import {Media} from '../../Config'; import ErrorIcon from '../icon/error'
// import {useInputValidation,useEventListener} from '../../Lib';
import {Container} from './styles'
import useTable from './hook'
import TablePagination from '../lib/TablePagination';
import {SortedTableContext} from '../lib/context'
import TableBody from './tableBody';
import TableHead from './tableHead';

const Table = React.memo(props => {
  const {pagination,...restProps} = props;
  const {tableState, tableAction} = useTable(props);

  const { data, rowsPerPage, page} = tableState;

  const isSelected = id => tableState
    .selected
    .indexOf(id) !== -1;

  const paramObject = {
    tableState, 
    tableAction,
    isSelected,
    ...restProps
  }
  return ( <SortedTableContext.Provider value={paramObject}>
    <Container>
      <TableHead />
      <TableBody />
    </Container>
   {pagination && <TablePagination 
          count={data.length} 
          rowsPerPage={rowsPerPage}
          page={page} 
          backIconButtonProps={{
          'aria-label' : 'Previous Page'
        }} 
        nextIconButtonProps={{
          'aria-label' : 'Next Page'
        }}    
        onChangePage={tableAction}
        onChangeRowsPerPage={tableAction}
        />
   }
        </SortedTableContext.Provider>
  )
});

Table.propTypes = {}

// Table.defaultProps = {   pattern: {} };

export default Table;