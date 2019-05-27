import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'



function useInputValidation(ref,config,callback) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observedElement = ref.current;
    // console.log('ref',observedElement)
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    
    const observer = new MutationObserver(callback)

    if (observedElement) {
      observer.observe(observedElement, config);
    }
    return () => {
      // observer.disconnect();
    };
  }, [ref,config,callback]); 

  return isIntersecting;
}



useInputValidation.propTypes = {
  ref: PropTypes.object.isRequired,
  config: PropTypes.object,
  callback: PropTypes.func.isRequired,


}


export default useInputValidation