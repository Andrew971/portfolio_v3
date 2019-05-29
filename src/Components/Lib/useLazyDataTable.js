import { useEffect } from 'react';
import PropTypes from 'prop-types'



function useLazyDataTable(ref, rootMargin = '0px',state) {
  // State and setter for storing whether element is visible


  useEffect(() => {
    const observedElement = ref.current;
    // console.log(ref)
    for ( let row of observedElement.rows){
      // console.log(row.index)
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          // console.log(entry)
          
          if(entry.isIntersecting){
            row.classList.remove('hide')
          }else{
            row.classList.add('hide')

          }
          // console.log(entry)
          // setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );

      if (row) {
        observer.observe(row);
      }
      observer.unobserve(observedElement);

    }
    
    
    return () => {

    };
  }, [ref,rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return ;
}



useLazyDataTable.propTypes = {
  ref: PropTypes.object.isRequired,
  rootMargin: PropTypes.string,


}


export default useLazyDataTable