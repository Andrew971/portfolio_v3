import React from 'react';


function init(initialState) {
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_ALL':
      // console.log(action.payload)
      return {
        ...state,
        selected: action.payload 
        ? state.data.map(n => n.Key)
        : []
      };
    case 'SELECT':
    const {event,Key} = action.payload
    const {selected} = state;
    const selectedIndex = selected.indexOf(Key);
    let newSelected = [];
    event.stopPropagation();

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Key);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1),);
    }
      return {
        ...state,
        selected: newSelected
      };
      case 'SORT':
      const { property} = action.payload;
        const orderBy = property;
        let order = 'desc';

        if (state.orderBy === property && state.order === 'desc') {
          order = 'asc';
        }

      return {
        ...state,
        order,
        orderBy
      };
      case 'CHANGE_PAGE':
      // console.log(action.payload)
      return {
        ...state,
        page: state.page  + Number(action.payload)
      };
      case 'CHANGE_ROW_PER_PAGE':
      return {
        ...state,
        rowsPerPage: action.payload
      };
      case 'RESET':
      return init(action.payload);
    default:
      throw new Error();
  }
}


export default ({data,pagination,orderBy,direction}) => {


  const initialStateRef = React.useRef({
    selected: [],
    order: direction || "asc", 
    orderBy: orderBy || "Name", 
    page: 0, 
    rowsPerPage: pagination || data.length,
    data
  })
  const [state, dispatch] = React.useReducer(reducer, initialStateRef.current,init);
  
  React.useEffect(()=>{
    dispatch({type:'RESET',payload:initialStateRef.current})
  },[data])

  
// console.log('reducerState',state)
 
  return {
    tableState:state,
    tableAction:dispatch
  }
}