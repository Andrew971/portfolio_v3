import React from 'react';
import PropTypes from 'prop-types'
import {useProgressiveImage} from '../Lib';
import { StyledLink,StyledImage } from './styles'





const LazyCard = React.memo((props) => {
  const imageRef = React.useRef()
  const parentImageRef = React.useRef();

  const { offSet=0, src, preview , srcSet,sizes,alt, ...restProps} = props;

  useProgressiveImage(parentImageRef, offSet)
  return (
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
      {...restProps}
    />
    </StyledLink>
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