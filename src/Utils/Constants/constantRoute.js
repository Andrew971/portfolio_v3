// import React from 'react';
import lazyLoadable from '../Lib/lazyLoadable'
// import Home from '../../Modules/Home'
// import Other from '../../Modules/Other'
// const Other = React.lazy(() => import('../../Modules/Other'));



const preloadedHome = import(/* webpackChunkName: "Home" */ '../../Modules/Home');
const Home = lazyLoadable(() => preloadedHome);

const preloadedOther = import(/* webpackChunkName: "Other" */ '../../Modules/Other');
const Other = lazyLoadable(() => preloadedOther);


export default [
  {
    component: Home,
    path: '/',
    isExact:true
  },
  {
    component: Other,
    path: '/other',
    isExact:true,
    // routes: [
    //   {
    //     component: Other,
    //     path: '/other/1',
    //     isExact:true,
    //   },

    // ]
  }
];
