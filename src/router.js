/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
let Home = resolve => require(["@/components/Index"], resolve);
let Login = resolve => require(['@/components/Login'], resolve);
let ReportSightings = resolve => require(['@/components/ReportSightings'], resolve)
// let Signup = resolve => require(['@/components/SignUp'], resolve);
// let Messages = resolve => require(['@/components/Messages'], resolve);
// let Profile = resolve => require(['@/components/profile/Profile'], resolve);
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
			path: '/login',
			name: 'login',
			// beforeEnter: checkIfAuthenticated,
			component: Login,
		},
		{
			path: '/signup',
			name: 'signup',
			// beforeEnter: checkIfAuthenticated,
			// component: Signup,
		},
		{
			path: '/report-sighting',
			name: 'report-sighting',
			component: ReportSightings
		},
		{
			path: '/:personId',
			name: 'person',
			params: 'personId',
			// beforeEnter: authenticate,
			// component: Profile
		},
	],
})
