import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
import {TextField} from '../../Components/Input';
import Icon from '../../Components/Icon'

function OtherContainer() {
  const ref = React.useRef();

  // console.log(ref)
  return (
    <React.Fragment>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"/>
      <Link to="/">Go to Home</Link>
      <div>Other</div>
      <div style={{
        width: '25%',
        marginTop: '2rem'
      }}>
        <TextField
          ref={ref}
          type="text"
          label="Label test"
          helperText="helper text"
          placeholder="placeholder test"
          icon={< Icon name = "profile" />}
          position='start'
          pattern={{
          upperCase: 3,
          lowerCase: 2,
          special:true,
          isEmail: false,
          maxLength: 10
        }}
          errorMessage="custom error message"
          withWordCounter/>
      </div>
    </React.Fragment>
  )
}

OtherContainer.propTypes = {}

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

export default withRouter((connect(mapState, mapDispatch)(OtherContainer)));
