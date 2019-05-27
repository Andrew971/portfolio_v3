import { useEffect } from 'react';
import PropTypes from 'prop-types'


function useOnClickOutside(ref,containerRef,handler) {

  useEffect(
    () => {
      const el = ref.current;
      const container = containerRef?containerRef.current:document;
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target)) {
          return;
        }

        handler(event);
      };
      container.addEventListener('mousedown', listener);
      container.addEventListener('touchstart', listener);
      return () => {
        container.removeEventListener('mousedown', listener);
        container.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, containerRef,handler]
  );
}


useOnClickOutside.propTypes = {
  ref: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
}


export default useOnClickOutside