import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import AboutView from '@/views/AboutView.vue'
import AttendanceView from '@/views/AttendanceView.vue'
import PayrollView from '@/views/PayrollView.vue'

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    meta: { requiresAuth: true }
  },{
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: AttendanceView,
    // meta: { requiresAuth: true }
  },{
    path: '/payroll',
    name: 'payroll',
    component: PayrollView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router