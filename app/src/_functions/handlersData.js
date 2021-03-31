export const sortData = (data) => data.sort((a, b) => {
	if (a.time > b.time) return -1;
	return 1;
});