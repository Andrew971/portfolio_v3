import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom'
import NotFound from './Shared/404'
import routeListe from './Utils/Constants/constantRoute'
import {PublicRoute} from './Utils/Constants/constMethod'
import {ThemeProvider} from 'styled-components';
import SEO from './Utils/Lib/seo';
import {AppBar} from './Components/AppBar';
import {AppContainer,Main} from './Components/Container';
import {Drawer} from './Components/Drawer';
import Icon from './Components/Icon'

// import PropTypes from 'prop-types';

const LoadingMessage = (props) => {
  return(
  "I'm loading."
)
  }

function RootContainer(props) {
  const [ state, setState ] = React.useState({
    isSideMenuOpen: false,
  })
  const toggleSideMenuOpen = () =>{ 
        
    setState((prevState) => {

    return {
      isSideMenuOpen: !prevState.isSideMenuOpen
    }
  })
}
const {isSideMenuOpen} = state;
  const { Theme } =props;
  return (
    <ThemeProvider theme={Theme}>
    <React.Fragment>
    <React.Suspense fallback={<LoadingMessage />}>
    <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"
      />    
      <AppBar>
        <Icon name="simple-hamburger" open={isSideMenuOpen} onClick={() => toggleSideMenuOpen()}/>
      </AppBar>
      <AppContainer>
      <Drawer
            open={isSideMenuOpen}
            width={5}
            distance={100}
            direction="left"
            onClose={toggleSideMenuOpen}
            id="clickIn">
            <div>test</div>
      </Drawer>
      <Main>
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
        </Main>
        </AppContainer>
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