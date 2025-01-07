import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '891'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '433'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '053'),
            routes: [
              {
                path: '/api/channel/',
                component: ComponentCreator('/api/channel/', '527'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/message/',
                component: ComponentCreator('/api/message/', '7c0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/overview/',
                component: ComponentCreator('/api/overview/', 'ec5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/user/',
                component: ComponentCreator('/api/user/', '464'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', '6b0'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
