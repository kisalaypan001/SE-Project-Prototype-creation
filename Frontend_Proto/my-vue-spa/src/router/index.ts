import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // Lazy-load the About view when this route is visited
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/loginpage',
    name: 'LoginPage', // Updated name to match the route naming convention
    component: () => import('../views/LoginPage.vue') // Dynamically import the LoginPage component
  },
  {
    path: '/coursespage',
    name: 'CoursesPage', // Updated name to match the route naming convention
    component: () => import('../views/CorsesPage.vue') // Dynamically import the LoginPage component
  },
  {
    path: '/python',
    name: 'PythonPage', // Updated name to match the route naming convention
    component: () => import('../views/PythonPage.vue') // Dynamically import the LoginPage component
  },
  {
    path: '/coding',
    name: 'CodingPage', // Updated name to match the route naming convention
    component: () => import('../views/CodingPage.vue') // Dynamically import the LoginPage component
  },
  {
    path: '/signup',
    name: 'SignUpPage', // Updated name to match the route naming convention
    component: () => import('../views/SignUpPage.vue') // Dynamically import the LoginPage component
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
