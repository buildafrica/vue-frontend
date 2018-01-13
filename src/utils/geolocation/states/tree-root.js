/**
 * This is the tree that holds the different states for the different states;
 */
const countries_states = [
	{
		isoCode: "US",
		states: require('./states-us')
	},
	{
		isoCode: "NG",
		states: require('./states-ng')
	}

]


module.exports = countries_states;
