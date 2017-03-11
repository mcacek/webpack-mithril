import m from 'mithril'

const Pet = {
	newPetModel: {},
	list() {
		return m.request({
			method: 'GET',
			url: 'http://localhost:8001/api/pets',
			withCredentials: true
		})
	},
	create() {
		return m.request({
			method: 'POST',
			url: 'http://localhost:8001/api/pets',
			data: Pet.newModel,
			withCredentials: true
		})
	}
}

export default Pet
