module.exports = (value) => {
	if (!value) {
		return '0%';
	}
	const n = Number(value);
	return `${String(n)}%`;
};
