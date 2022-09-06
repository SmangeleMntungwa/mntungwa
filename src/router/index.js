import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Admin.vue')
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Login.vue')
  },
  // {
  //   path: '/shop',
  //   name: 'Shop',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue'),
  // },
  // {
  //   path: '/shop/:id',
  //   name: 'EditProduct',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditProduct.vue'),
  //   props:true
  // },
  // {
  //   path: '/support',
  //   name: 'Support',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Support.vue')
  // },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  // {
  //   path: '/encyclopedia',
  //   name: 'Encyclopedia',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Encyclopedia.vue')
  // },
  // {
  //   path: '/Cephalopods',
  //   name: 'Cephalopods',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Cephalopods.vue')
  // },

  // {
  //   path: '/Cephalopods/:id',
  //   name: 'CephalopodsDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/CephalopodsDetails'),
  //   props: true
  // },
  // {
  //   path: '/Corals',
  //   name: 'Corals',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Corals.vue')
  // },
  // {
  //   path: '/Corals/:id',
  //   name: 'CoralDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/CoralDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/Mammals',
  //   name: 'Mammals',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Mammals.vue')
  // },
  // {
  //   path: '/Mammals/:id',
  //   name: 'MammalDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MammalDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/ScienceAndEcosystems',
  //   name: 'ScienceAndEcosystems',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ScienceAndEcosystems.vue')
  // },
  // {
  //   path: '/ScienceAndEcosystems/:id',
  //   name: 'EcosystemDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/EcosystemDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/Fishes',
  //   name: 'Fishes',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Fishes.vue')
  // },
  // {
  //   path: '/Fish/:id',
  //   name: 'FishDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/FishDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/TurtlesAndReptiles',
  //   name: 'TurtlesAndReptiles',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/TurtlesAndReptiles.vue')
  // },
  // {
  //   path: '/TurtlesAndReptiles/:id',
  //   name: 'ReptileDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ReptileDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/Seabirds',
  //   name: 'Seabirds',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Seabirds.vue')
  // },
  // {
  //   path: '/Seabirds/:id',
  //   name: 'SeabirdDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/SeabirdDetails.vue'),
  //   props: true
  // },
  // {
  //   path: '/SharkAndRays',
  //   name: 'SharkAndRays',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/SharkAndRays.vue')
  // },
  // {
  //   path: '/Shark/:id',
  //   name: 'SharkDetails',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/SharkDetails.vue'),
  //   props: true
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

 

export default router
