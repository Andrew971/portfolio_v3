import React from 'react';
import { Route } from 'react-router-dom'

export const sort_by = (order, value) => {
  if (order === 'ASC') {
    return (a, b) => b[value] - a[value]
  } else if (order === 'DESC') {
    return (a, b) => a[value] - b[value]
  }
}

export const debounce = (func, delay) => {
  let inDebounce
  return function () {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const Loading = (props) => {
  if (props.error) {
    return <div>Error!
      <button onClick={props.retry}>Retry</button>
    </div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...
      <button onClick={props.retry}>Retry</button>
    </div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export function PublicRoute(routeProps) {
  return (
    <Route
      exact={routeProps.isExat}
      path={routeProps.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <routeProps.component {...props} routes={routeProps.routes} />
      )}
    />
  );
}

const quick_SortArrayWithObject = (array,field) => {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];
  const left = [],
      right = [];

  for (let i = 0; i < array.length - 1; i++) {
      if (array[i][field] < pivot[field]) left.push(array[i]);
      else right.push(array[i]);
  }

  return [...quick_SortArrayWithObject(left,field), pivot, ...quick_SortArrayWithObject(right,field)];
};

function binaryObjectSearch(arr, field, searchTerm) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid][field] === searchTerm) {
            return arr[mid];
        }
        if (arr[mid][field] < searchTerm) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

export const searchWithObject = (array,field,searchTerm) => binaryObjectSearch(quick_SortArrayWithObject(array,field),field,searchTerm);


function quick_SortArray(array) {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];
  const left = [],
      right = [];

  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) left.push(array[i]);
      else right.push(array[i]);
  }

  return [...quick_SortArray(left), pivot, ...quick_SortArray(right)];
	}


function binarySearch(arr, searchTerm) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === searchTerm) {
            return arr[mid];
        }
        if (arr[mid] < searchTerm) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

export const search = (array,searchTerm) => binarySearch(quick_SortArray(array),searchTerm);


export const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));


export function join(lookupTable, mainTable, lookupKey, mainKey, select) {
  let lookupIndex = [],
      output = [];
  lookupTable.forEach((item)=>lookupIndex[item[lookupKey]] = item)
  mainTable.forEach((item)=>output.push(select(item, lookupIndex[item[mainKey]])))
  return output;
};


export const lazyWithPreload = (factory) => {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}