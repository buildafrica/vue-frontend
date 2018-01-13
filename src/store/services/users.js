import _ from 'lodash';
import {
	getUserDetails
} from "../../resources/users";

const state = {
	user: {
		firstname: "",
		lastname: "",
		username: "",
		userType: "",
		isActivated: "",
		contact: {
			phone: "",
			email: "",
			address: {
				street: "",
				zip: "",
				city: "",
				state: "",
				country: ""
			},
			social: {
				facebook: "",
				instagram: "",
				google_plus: "",
				twitter: "",
				linkedin: "",
			}
		},
		bio_data: {
			dob: "",
			origin_address: {
				state: "",
				lga: "",
				country: ""
			}
		},
		apartments: []
	}

};

const getters = {
	user: sate => state.user
};

const actions = {
	getUser({
		state,
		commit,
		dispatch
	}, username) {
		return getUserDetails(username).then((user) => {
			if (!_.isNull(user)) {
				commit('user', user)
			}

		})
	}
};

const mutations = {
	user(state, user) {
		state.user = user || {}
	}
};

export default {
	strict: true,
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
