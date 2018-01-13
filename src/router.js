/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
let Home = resolve => require(["@/components/Index"], resolve);
let Archives = resolve => require(['@/components/Archives'], resolve);
let Login = resolve => require(['@/components/Login'], resolve);
let Signup = resolve => require(['@/components/Signup'], resolve);
let ReportSightings = resolve => require(['@/components/ReportSightings'], resolve);
let ReportCase = resolve => require(['@/components/ReportCase'], resolve);
/**
 * Utilities & other Services;
 */
import {
  authenticate,
  deauthenticate,
  checkIfAuthenticated
} from '@/utils';
import {
  resolve
} from 'path';

Vue.use(Router)

export default new Router({
  hashbang: false,
  history: true,
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/archives',
      name: 'archives',
      component: Archives,
    },
    {
      path: '/report-sighting',
      name: 'report-sighting',
      component: ReportSightings
    },
    {
      path: '/report-case',
      name: 'report-case',
      component: ReportCase
    },
    {
      path: '/login',
      name: 'login',
      // beforeEnter: checkIfAuthenticated,
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      // beforeEnter: checkIfAuthenticated,
      component: Signup,
    },
  ],
})
