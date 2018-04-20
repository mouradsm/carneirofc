
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'parcial', component: () => import('pages/parcial') },
      { path: 'login', component: () => import('pages/login') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
