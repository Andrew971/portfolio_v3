import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
import LazyImage from '../../Components/Image'
import {LazyCard} from '../../Components/Card'

function HomeContainer () {

  return (<>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"
      />
      <Link to="/other">Go to Other</Link>
      <Link to="/table">Go to table</Link>
      <div>Home</div>
      <div style={{width:"100%",height:"50vh",overflow:"hidden",background: "lightgrey"}}>
        <LazyImage 
          src="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg"
          preview="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/32x/-/grayscale/-/quality/lightest/mountain.jpg"
          srcSet="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/400x/mountain.jpg 400w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/800x/mountain.jpg 800w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg 1600w"
          sizes="(max-width: 400px) 280px,
          (max-width: 800px) 440px,
          1600px"
          offSet="200" />
      </div>
      <div style={{width:"100%",height:"auto",overflow:"hidden",marginTop:"200vh"}} />
      <LazyCard 
        width="100%"
        height="50vh"
        src="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg"
        preview="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/32x/-/grayscale/-/quality/lightest/mountain.jpg"
        srcSet="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/400x/mountain.jpg 400w,
        https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/800x/mountain.jpg 800w,
        https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg 1600w"
        sizes="(max-width: 400px) 280px,
        (max-width: 800px) 440px,
        1600px"
        offSet="200"
      >
      <div>test</div>
      </LazyCard>

      <div style={{width:"100%",height:"100vh",overflow:"hidden",marginTop:"200vh"}} />

      <div style={{width:"100%",height:"50vh",overflow:"hidden",background: "lightgrey"}}>
        <LazyImage 
          src="https://ucarecdn.com1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg"
          preview="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/32x/-/grayscale/-/quality/lightest/mountain.jpg"
          srcSet="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/400x/mountain.jpg 400w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/800x/mountain.jpg 800w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg 1600w"
          sizes="(max-width: 400px) 280px,
          (max-width: 800px) 440px,
          1600px"
          offSet="200" />
      </div>
      <div style={{width:"100%",height:"100vh",overflow:"hidden",marginTop:"200vh"}} />

      <div style={{width:"100%",height:"50vh",overflow:"hidden",background: "lightgrey"}}>
        <LazyImage 
          src="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg"
          preview="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/32x/-/grayscale/-/quality/lightest/mountain.jpg"
          srcSet="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/400x/mountain.jpg 400w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/800x/mountain.jpg 800w, 
          https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg 1600w"
          sizes="(max-width: 400px) 280px,
          (max-width: 800px) 440px,
          1600px"
          offSet="200" />
      </div>
      <div style={{width:"100%",height:"auto",overflow:"hidden",marginTop:"200vh"}} />
      <LazyCard 
        width="100%"
        height="50vh"
        src="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg"
        preview="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/32x/-/grayscale/-/quality/lightest/mountain.jpg"
        srcSet="https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/400x/mountain.jpg 400w,
        https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/-/resize/800x/mountain.jpg 800w,
        https://ucarecdn.com/1b73ebf8-b2d6-40cc-abd6-945d4df883c9/mountain.jpg 1600w"
        sizes="(max-width: 400px) 280px,
        (max-width: 800px) 440px,
        1600px"
        offSet="200"
      >
      <div>test</div>
      </LazyCard>
    </>
  )
}

HomeContainer.propTypes = {

}

const mapState = state => ({count: state.sharedModel.count});

const mapDispatch = ({
  sharedModel: {
    increment,
    incrementAsync
  }
}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

export default withRouter((connect(mapState, mapDispatch)(HomeContainer)));
