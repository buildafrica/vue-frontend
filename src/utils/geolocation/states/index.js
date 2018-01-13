const _ = require('lodash');
const countries_states = require('./tree-root');
const countries = require('@/utils/geolocation');


/**
 * This function takes in an object or a string of a country's data and returns the list(array) of states that country has under it.
 * example: countryStates('NG' || 'ng' || { isoCode: 'NG' || 'ng' }) // [...];
 * @param {* Object | String} country 
 */
export const countryStates = (country) => {
	var countryData = _.find(countries, {
		name: country || ""
    });
    
	var states = [];
	if (!_.isEmpty(countryData)) {
		let data = _.find(countries_states, {
			isoCode: countryData.isoCode || ""
		});

		if (data) {
			states = data.states;
        };
        
	};
	return states;
};
