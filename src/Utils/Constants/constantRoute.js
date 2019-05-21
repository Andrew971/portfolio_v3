import React from 'react';
// import Home from '../../Modules/Home'
// import Other from '../../Modules/Other'
const Home = React.lazy(() => import('../../Modules/Home'));
// const Other = React.lazy(() => import('../../Modules/Other'));


export default [
  {
    component: Home,
    path: '/',
    isExact:true
  },
  {
    component: Home,
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
