// const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ad8e39827emsh4ea89255472dd78p149f41jsn8c79f4d9c7ff',
// 		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://dad-jokes.p.rapidapi.com/joke/type/general',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad8e39827emsh4ea89255472dd78p149f41jsn8c79f4d9c7ff',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});