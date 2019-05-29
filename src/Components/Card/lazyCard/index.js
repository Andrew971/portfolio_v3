import React from 'react';
import PropTypes from 'prop-types'
import {useProgressiveImage} from '../../Lib';
import { StyledCard,StyledLink,StyledImage } from './styles'


const LazyCard = React.memo((props) => {
  const containerRef = React.useRef();
  const imageRef = React.useRef();
  const parentImageRef = React.useRef();

  const { offSet=0, src, preview , srcSet,sizes,alt, ...restProps} = props;

  useProgressiveImage(parentImageRef, offSet)
 

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
    <StyledLink 
      href={src} 
      className="replace" 
      ref={parentImageRef} 
      srcSet={srcSet} 
      sizes={sizes} 
        >
      <StyledImage 
        className="preview"
        src={preview}
        ref={imageRef} 
        data-preview={preview} 
        alt={alt}
      />
    </StyledLink>
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