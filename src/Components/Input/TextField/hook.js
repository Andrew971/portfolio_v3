import React from 'react';

export default (initialState) => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'SET_ERROR':

      return {
          ...state,
          isError:true
        };
      case 'UNSET_ERROR':

      return {
          ...state,
          isError:false
        };
      case 'SET_WORD_COUNT':

      return {
        ...state,
          wordCount:action.payload.wordCount
        };

      case 'RESET':
        return initialState;
      default:
        throw new Error();
    }
  }

  const asyncAction = {

    async uploadToS3 (restaurantDispatch,callback) {
      // const file = state.poster;
      await new Promise(resolve => setTimeout(resolve, 1000))
      // console.log('state',restaurantDispatch)
      dispatch({type:"RESET"})
      return new Promise((resolve,reject)=>{


      })
    }

  }

  // console.log(state)
  return {
    state:state,
    action:dispatch,
    asyncAction
  }
}