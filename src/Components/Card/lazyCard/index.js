import React from 'react';
import PropTypes from 'prop-types'
import styled, {keyframes,css} from "styled-components";
import {Media} from '../../Config';
import {useOnScreen,useEventListener} from '../../Lib';

const progressiveReveal = keyframes`
	0% { transform: scale(1.05); opacity: 0; }
	100% { transform: scale(1); opacity: 1; }
`;


const StyledCard =  styled.div`

  display: flex;
  position:relative;
  width: ${props=>props.width?props.width:'100%'};
  height: ${props=>props.height?props.height:'100%'};
  border: 0 none;
  overflow:hidden;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  ${props=>!props.isBackgroundImage && css`
  background-color:lightgrey;
  `}

  & img {
    position: absolute;
    top:0;
    left:0;
    z-index:-1;
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


const StyledImage =  styled.img`
  max-width:100vw;
  max-height:100vh;
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;

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
  const containerRef = React.useRef();
  const imageRef = React.useRef();

  const { offSet=0, src, preview , srcSet,sizes, ...restProps} = props;

  const onScreenWithOffSet = useOnScreen(imageRef, `${offSet}px`);
  const onScreen = useOnScreen(imageRef, '0px');

  const downloadImage = React.useCallback((e,el)=>{
    el.src = el.getAttribute('data-preview');
    el.removeAttribute('data-preview');

    el.onload = function (){
      if(!e){
        setTimeout(()=>{
          switchImageSize(this)
        },450)
      }else{
        switchImageSize(this)
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

  function switchImageSize (el){
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
  }
  (src||preview) && useEventListener('scroll', lazyLoadCallBack);
  (src||preview) && useEventListener('resize', lazyLoadCallBack);

  React.useEffect(()=>{(src||preview) && lazyLoadCallBack()},[src,preview,lazyLoadCallBack])

  const modifyChildren = (child) => {
    // const elementList = Array.from(containerRef.current.classList)
    const props = {
      className:`lazy-card_content_element`
    };

    return React.cloneElement(child, props);
  }


  return (
    <StyledCard 
      ref={containerRef}
      isBackgroundImage={(src||preview)}
      {...restProps}
    >
    {(src||preview)&&
      <StyledImage 
        className="preview"
        ref={imageRef} 
        data-preview={preview} 
        data-src={src} 
        srcset={srcSet} 
        sizes={sizes} 
      />
    }
    {
      React.Children.map(props.children, (child) =>  modifyChildren(child))
    }
    </StyledCard>
  )
})

LazyCard.propTypes = {
  src: PropTypes.string,
  preview: PropTypes.string,
  offSet: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
}

export default LazyCard