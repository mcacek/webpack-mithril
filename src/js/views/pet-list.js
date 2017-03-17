import m from 'mithril'
import PetModel from '../models/pet'
import PetListItem from '../components/pet-list-item'

export default {
	oninit: PetModel.loadList,
	view() {
		return m('.pet-list-view', [
			m('h2', 'Adoptable Pets'),
			m('.pet-list', PetModel.list.map(pet => {
				return m(PetListItem, pet)
			}))
		])
	}
}
