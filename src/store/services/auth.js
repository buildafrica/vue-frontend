import {
	login,
	register
} from "../../resources/users";
import {
	reRoute,
	authenticatedUser
} from '@/utils';

const state = {
	loginData: {
		username: '',
		password: ''
	},
	signupData: {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		username: '',
		password: '',
		userType: '',
	},
	me: authenticatedUser()
};

const getters = {
	loginData: state => state.loginData,
	signupData: state => state.signupData,
	me: state => state.me
}

const actions = {
	registerUser({
		state,
		dispatch,
		commit
	}) {
		let payload = {
			username: String(state.signupData.username).toLowerCase().trim(),
			email: String(state.signupData.email).toLowerCase().trim(),
			firstname: String(state.signupData.firstname),
			lastname: String(state.signupData.lastname),
			userType: String(state.signupData.userType),
			password: String(state.signupData.password),
			phone: String(state.signupData.phone).trim(),
		};
		return register(payload)
	},
	loginUser({
		state,
		dispatch,
		commit
	}) {
		let payload = {
			username: String(state.loginData.username).toLowerCase().trim(),
			password: String(state.loginData.password)
		};
		return login(payload);
	}
}
const mutations = {
	updateSignupData(state, value) {
		state.signupData = value;
	},
	updateLoginData(state, value) {
		state.loginData = value;
	},
	resetPayload(state) {
		state.loginData = {
			username: '',
			password: ''
		};

		state.signupData = {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			username: '',
			password: '',
			// confirmPassword: "",
			userType: '',
		}
	}
};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
