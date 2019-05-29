import { useEffect,useCallback } from 'react';
import PropTypes from 'prop-types'



function useOnScreen(parentRef, offSet = 0 ) {

      // replace with full image
  const loadFullImage = useCallback( (parentEl,imageEl) => {

        var href = parentEl && (parentEl.getAttribute('data-href') || parentEl.href);
        if (!href) return;
    
        // load image
        var img = new Image();
        if (parentEl.dataset) {
          img.srcset = parentEl.dataset.srcset || '';
          img.sizes = parentEl.dataset.sizes || '';
        }

        const previousClass = Array.from(imageEl.classList).filter(item=>item!=="preview").join(" ");
        img.src = href;
        img.className = `${previousClass} reveal`;
        if (img.complete) addImg(img,parentEl,href);
        else img.onload = function () {addImg(this,parentEl,href)};
    
      },
      [],
  )

  const inView = useCallback( (parentEl,imageEl, offSet = 0 ) =>{

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting){
          if(imageEl.getAttribute('data-preview')){

          loadFullImage(parentEl,imageEl)
          
          imageEl.removeAttribute('data-preview');
          parentEl.classList.remove('replace');
          }
        }
      },
      {
        rootMargin: `${offSet}px`
      }
    );
    observer.observe(parentEl);

  },
  [loadFullImage],
  )

      // replace image
      function addImg(that,parentEl,href) {
  
        requestAnimationFrame(function() {
  
          // disable click
          if (that.src === parentEl.href) {
            parentEl.style.cursor = 'default';
            parentEl.addEventListener('click', function(e) { e.preventDefault(); }, false);
          }
  
          // preview image
          const pImg = parentEl.querySelector && parentEl.querySelector('img.preview');
          // add full image
          parentEl.insertBefore(that, pImg && pImg.nextSibling).addEventListener('animationend', function() {
  
            // remove preview image
            if (pImg) {
              that.alt = pImg.alt || '';
              parentEl.removeChild(pImg);
            }
  
            that.classList.remove('reveal');
  
          });
  
        });
  
      }




  const lazyLoadCallBack = useCallback((e)=>{
    let parentEl = parentRef.current
    let imageEl = parentEl.firstChild;
      // start

    requestAnimationFrame(()=>inView(parentEl,imageEl, offSet ))
  // initial check
  

  },
  [parentRef,offSet,inView],
  );








  useEffect(()=>{
    if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) {

      lazyLoadCallBack()
    }
    
  },[lazyLoadCallBack])

}



useOnScreen.propTypes = {
  ref: PropTypes.object.isRequired,
  rootMargin: PropTypes.string,


}


export default useOnScreen