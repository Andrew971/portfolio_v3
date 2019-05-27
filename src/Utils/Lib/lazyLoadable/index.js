import React from 'react';


function lazyLoadable (factory)  {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}


export default lazyLoadable;