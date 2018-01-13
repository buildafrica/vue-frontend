import moment from 'moment';

export default (value) => {
	const date = new Date(value);
	return moment(date).format('MMM Do YY, h:mm a');
};
