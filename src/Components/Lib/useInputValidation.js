import {  useEffect } from 'react';
import PropTypes from 'prop-types'



function useEventListener(ref ){
  // Create a ref that stores handler
  // const savedHandler = useRef();
  
  function validateHandler (event) {
    console.log(event)
  }
  
  // useEffect(() => {
  //   savedHandler.current = validateHandler;
  // }, []);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      const element = ref.current || ref
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      // const eventListener = event => savedHandler.current(event);
      // Add event listener
      element.addEventListener('change', validateHandler);
      
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener('change', validateHandler);
      };
    },
    [ref] // Re-run if eventName or element changes
  );
};


useEventListener.propTypes = {
  // handler: PropTypes.string.isRequired,
  ref: PropTypes.object,

}


export default useEventListener