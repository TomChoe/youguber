import axios from 'axios';

const api_key = 'AIzaSyCE1WPmAG4axcCnhNvS75BedummsHWWJgo';
const url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&order=date&part=snippet&maxResults=9&q=`;
const next = `&pageToken=`;

const Services = {
	getVideos(query) {
		return axios({
			method: "GET",
			url: url + query
		})
	},

	getMore(query, token) {
		return axios({
			method: "GET",
			url: url + query + next + token
		})
	},

	signUp(user) {
		return axios({
			method: "POST",
			url: "/users",
			data: user
		})
	},

	getUsers() {
		return axios({
			method: "GET",
			url: "/users"
		})
	},

	editUser(user) {
		console.log('this is services for edit profile id', user)
		return axios({
			method: "PATCH",
			url: `/users/${user.id}`,
			data: {
				userName: user.userName,
				passWord: user.passWord
			}
		})
	},

	getFavs() {
		return axios({
			method: "GET",
			url: "/favorites"
		})
	},

	addFav(fav) {
		console.log('this is services for addFav', fav)
		let favName = fav.split(' ')[0]
		let favId = fav.split(' ')[1]
		return axios({
			method: "POST",
			url: "/favorites",
			data: {
				userId: favId,
				favs: favName
			}
		})
	},

	deleteFav(id) {
		return axios({
			method: "DELETE",
			url: `/favorites/${id}`
		})
	}
}

export default Services;