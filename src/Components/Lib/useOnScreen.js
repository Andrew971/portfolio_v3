import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'



function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  //Old fashioned way
  // const isInViewportCallBack = useCallback((el)=>{
  //   var rect = el.getBoundingClientRect();
  //   setIntersecting((
  //         rect.bottom >= 0 && 
  //         rect.right >= 0 && 
  //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
  //         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  //     ));
  // },
  // [],
  // );

  // const isOffSetCallBack = useCallback((el)=>{
  //   const rect = el.getBoundingClientRect();

  //   setIntersecting((rect.top <= (window.innerHeight + Number(rootMargin))) ||(rect.top <= (document.documentElement.clientHeight + Number(rootMargin))))
    
  // },
  // [rootMargin],
  // );

  useEffect(() => {
    const observedElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    
    if (observedElement) {
      observer.observe(observedElement);
    }
    return () => {
      observer.unobserve(observedElement);
    };
  }, [ref,rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}



useOnScreen.propTypes = {
  ref: PropTypes.object.isRequired,
  rootMargin: PropTypes.string,


}


export default useOnScreen