import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';

function HomeContainer () {

  return (<React.Fragment>
   <SEO
      schema="AboutPage"
      title="Base"
      description="A starting point for Meteor applications."
      path="/"
      contentType="product"
    />

    <Link to="/other">Go to Other</Link>
    <div>Home</div>
    </React.Fragment>
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
