import m from 'mithril'
import config from '../config'

const Pet = {
	newPetModel: {},
	list: [],
	loadList() {
		return m
			.request({
				method: 'GET',
				url: `${config.baseURI}/pets?_sort=name&_order=ASC`
			})
			.then(result => {
				Pet.list = result
			})
	},
	create() {
		return m
			.request({
				method: 'POST',
				url: 'http://localhost:8001/api/pets',
				data: Pet.newModel,
				withCredentials: true
			})
	}
}

export default Pet
