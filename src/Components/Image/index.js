import React from 'react';
import PropTypes from 'prop-types'
import styled, {keyframes} from "styled-components";
import {Media} from '../Config';
import {useOnScreen,useEventListener} from '../Lib';

const progressiveReveal = keyframes`
	0% { transform: scale(1.05); opacity: 0; }
	100% { transform: scale(1); opacity: 1; }
`;


const StyledImage =  styled.img`
  background-color :grey;
  max-width:100vw;
  max-height:100vh;
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;
  transition: all .5s ;
  
  &.preview {
    filter: blur(2vw);
    transform: scale(1.05);
  }
  &.reveal {
  will-change: transform, opacity;
  animation: ${progressiveReveal} 1s ease-out;
  }

  ${Media.phone `

  `}

  ${Media.tablet `

  `}

  ${Media.laptop `

  `}

  ${Media.desktop `



  `}

`;



const LazyCard = React.memo((props) => {
  const imageRef = React.useRef()
  const { offSet=0, src, preview , srcSet,sizes, ...restProps} = props;

  const onScreenWithOffSet = useOnScreen(imageRef, `${offSet}px`);
  const onScreen = useOnScreen(imageRef, '0px');

  const downloadImage = React.useCallback((e,el)=>{
    const src = el.getAttribute('data-preview');
    el.src = src;
    el.removeAttribute('data-preview');

    el.onload = function (){
      if(!e){
        setTimeout(()=>{
          switchImageSize(this,src)
        },450)
      }else{
        switchImageSize(this,src)
      }
    }
  },
  [],
  );

  const lazyLoadCallBack = React.useCallback(async (e)=>{
    let lazy = imageRef.current;
    return onScreenWithOffSet || onScreen
    ?lazy.getAttribute('data-preview')
      ? downloadImage(e,lazy)
      :null
    :null;

  },
  [onScreenWithOffSet,onScreen,downloadImage],
  );

  function switchImageSize (el,previewSrc){
    let src = el.getAttribute('data-src');
    if (!src) return;

    el.src = src;
    el.removeAttribute('data-src');
    el.onload = function () {
      el.classList.toggle('preview')
      el.classList.toggle('reveal')
      setTimeout(()=>{
        el.classList.toggle('reveal')
      },1200)
    }

    el.onerror = ()=>{
      // console.log(this)
      el.src = previewSrc
    }
  }
  useEventListener('scroll', lazyLoadCallBack);
  useEventListener('resize', lazyLoadCallBack);

  React.useEffect(()=>{lazyLoadCallBack()},[lazyLoadCallBack])

  return (
    <StyledImage 
      className="preview"
      ref={imageRef} 
      data-preview={preview} 
      data-src={src} 
      srcset={srcSet} 
      sizes={sizes} 
      {...restProps}
    />

  )
})

LazyCard.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  offSet: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
}

export default LazyCard