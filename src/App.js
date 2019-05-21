import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom'
import NotFound from './Shared/404'
import routeListe from './Utils/Constants/constantRoute'
import {PublicRoute} from './Utils/Constants/constMethod'
import {ThemeProvider} from 'styled-components';
// import PropTypes from 'prop-types';
import './App.css';
const LoadingMessage = () => (
  "I'm loading..."
)

function RootContainer(props) {
  const { Theme } =props;
  return (
    <ThemeProvider theme={Theme}>
    <React.Fragment>

    <Helmet title="You Are Doing Great" />
    <React.Suspense fallback={<LoadingMessage />}>
    <Switch>
        {routeListe
          .map((route,n) =>{
          return (
            <PublicRoute exact={route.isExact} key={n} {...route} {...props}/>
          )
        })
        }
        <Route render={(routeProps) =>
          <NotFound {...routeProps}/>}
        />
        </Switch>
        </React.Suspense>
    </React.Fragment>
    </ThemeProvider>

  );
}

const mapState = state => ({
  Theme: state.sharedModel.Theme
})

const mapDispatch = ({ sharedModel: { setSearchTerm }}) => ({
  increment: () => setSearchTerm(1),
})

RootContainer.propTypes = {
};

export default withRouter(connect(mapState, mapDispatch)(RootContainer))