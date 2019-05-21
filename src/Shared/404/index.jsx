import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
// import {HeroCard} from '../../Components/Cards'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class NotFound extends Component {

  render() {
    console.log('not found');
    return (<div>
          <Helmet title="404 - Page Not Found" />

          <h1>404</h1>
    </div>)
  }
}

const mapState = state => ({
  Theme: state.sharedModel.Theme
})

const mapDispatch = ({ sharedModel: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
})

NotFound.propTypes = {
  somePorps : PropTypes.object
};

export default withRouter((connect(mapState, mapDispatch)(NotFound)));

