import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'



function useLazyDataTable(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);


  useEffect(() => {
    const observedElement = ref.current;
    for ( let row of observedElement.children){
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );

      if (row) {
        observer.observe(row);
      }

    }
    
    
    return () => {

      // observer.unobserve(observedElement);
    };
  }, [ref,rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}



useLazyDataTable.propTypes = {
  ref: PropTypes.object.isRequired,
  rootMargin: PropTypes.string,


}


export default useLazyDataTable