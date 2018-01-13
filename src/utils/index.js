// require('dotenv').load()
// export const photoConfig = require('./photos')
// export const COUNTRY_DATA = require('./geolocation')
/* eslint-disable */
import {
	isArray
} from 'util';
import _ from 'lodash';

/**
 * This returns an error object from a list of error messages object;
 * @param {Array} errlist 
 */
export function errorToObj(errlist) {
	const fielddata = {}
	errlist.forEach((i) => {
		fielddata[i.field] = i.message;
	})
	return fielddata;
}


/**
 * reRoute takes in the user object, tokenizes it and also saves the user object in localStorage.
 */
export const reRoute = (payload) => {
	if (payload !== undefined || payload !== null || payload !== "") {
		// Stores the user token for further use by auth headers;
		// TODO: Replace Client Side Storage from token to something more not user seen;
		localStorage.setItem('token', payload)
		return window.location.replace('/apartments')
	}
}

export const authenticatedUser = () => {
	const token = localStorage.getItem('token')
	let user = null;
	if (token !== null) {
		const decoded = JSON.parse(atob(token.split('.')[1]))
		user = decoded.data
		return user;
	}
	return user;
}

/**
 * This is a middleware for function to run before the route changes from a state to another state;
 * @param {String} to 
 * @param {String} from 
 * @param {Function} next 
 */
export function authenticate(to, from, next) {
	//TODO: More Items to verify token;
	if (authenticatedUser()) {
		return next()
	} else {
		return window.location.replace('/login')
	}
}

/**
 * Checks if the required userType is exactly the expected value;
 * @param {String} userType 
 * @param {String || Array of Strings } value 
 * Example 1: checkUser(userType, 'admin') // true
 * Example 2: checkUser(userType, ['admin', 'user', 'fish']) // If userType is any of [...value] ? it returns true
 */
export function checkUser(userType, value) {
	const getElementValue = (value) => {
		if (isArray(value)) {
			for (let i = 0; i < value.length; i++) {
				var element_value = value[i];
				if (userType === element_value) {
					return element_value;
				}
			}
		} else {
			return value
		}
	}
	if (userType === getElementValue(value)) return true;
	return false
}
/**
 * This is to generate any random string;
 * @param {number} length
 * @param {alphan-umeric string} chars
 */
export const generateId = (length) => {
	var result = '';
	const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	for (var i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}

	return result;
}


/**
 * Pace Configuration
 */
export const paceConf = {
	request() {
		config => {
				$(".pace").show() // Do something before request is sent
				return config;
			},
			error => {
				$(".pace").show()
				return Promise.reject(error) // Do something with request error
			}
	},
	response() {
		response => {
				// Do something with response data
				$(".pace").hide()
				return response;
			},
			error => {
				// Do something with response error
				$(".pace").hide()
				return Promise.reject(error)
			}
	}
}


/**
 * This function checks the authenticated state of a user before proceeding to the login / signup page; 
 * if the user is authenticated, it simply redirects to the apartments page.
 * @param {Object} to 
 * @param {Object} from 
 * @param {Callback} next 
 */
export const checkIfAuthenticated = (to, from, next) => {
	const token = localStorage.getItem('token') || null;
	const user = authenticatedUser()


	//TODO: More Items to verify token;
	if (token && user) {
		return window.location.replace('/apartments')
	} else {
		next()
	}
}


/**
 * Counts the total words in a group of strings.
 * Example: wordCount("I am a boy") // Outputs: 4;
 */
export const wordCount = (stringGroup) => {
	/**
	 * Compconste the function body below to count
	 * the number of words in str. Assume str has at
	 * least one word, e.g. it is not empty. Do so by
	 * counting the number of spaces and adding 1
	 * to the result
	 */

	var count = 0;
	for (var i = 0; i <= stringGroup.length; i++) {
		if (stringGroup.charAt(i) == " ") {
			count++;
		}
	}
	return count + 1;
}


export const getAgeDifference = (ageData) => {
	const HumanDateOfBirth = new Date(ageData).getUTCFullYear()
	const CurrentYear = new Date().getUTCFullYear()
	const age = Math.floor(CurrentYear - HumanDateOfBirth)
	return age;
}


export const isOwnedByThisPublisher = (payload) => {
	const loggedInUser = authenticatedUser()

	if (loggedInUser && loggedInUser.username === payload) {
		return true;
	}
	return false
}
