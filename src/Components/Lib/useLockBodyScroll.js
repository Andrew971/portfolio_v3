import { useLayoutEffect } from 'react';


function useLockBodyScroll(condition) {
  useLayoutEffect(() => {
   // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    // Prevent scrolling on mount
    if(condition) {
      document.body.style.overflow = 'hidden';
    }
    
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = originalStyle;
    }, [condition]); // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll