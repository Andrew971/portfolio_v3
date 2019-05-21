// import React from 'react';
import {lazyWithPreload} from '../Constants/constMethod'
// import Home from '../../Modules/Home'
// import Other from '../../Modules/Other'
// const Other = React.lazy(() => import('../../Modules/Other'));



const preloadedHome = import(/* webpackChunkName: "Home" */ '../../Modules/Home');
const Home = lazyWithPreload(() => preloadedHome);

const preloadedOther = import(/* webpackChunkName: "Home" */ '../../Modules/Other');
const Other = lazyWithPreload(() => preloadedOther);


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
