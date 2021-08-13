import axios from 'axios';

const axiosFetchAction = async (
	dispatch,
	url,
	method,
	{ loadingType, dataType, errorType },
	retries = 5,
	time = 2500
) => {
	if (retries !== 0) {
		dispatch({
			type: loadingType,
		});
	}

	try {
		if (retries !== 0) {
			const response = await axios({
				method,
				url,
			});
			const { data } = response;
			dispatch({
				type: dataType,
				payload: data,
			});
		}
	} catch (error) {
		setTimeout(() => {
			axiosFetchAction(
				dispatch,
				url,
				method,
				{
					loadingType,
					dataType,
					errorType,
				},
				retries - 1
			);
		}, time);

		if (retries === 1) {
			dispatch({
				type: errorType,
				payload: error,
			});

			return Promise.reject('Error Status Code:' + error.message);
		}
	}
};

export default axiosFetchAction;
