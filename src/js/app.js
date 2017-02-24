import m from 'mithril'
import {
	createComponent,
	run
} from 'meiosis'
import {
	renderer
} from 'meiosis-mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

import Layout from './views/layout.view'
import Login from './views/login.view'
import PetList from './views/pet-list.view'
import AddPet from './views/add-pet.view'
import AdoptionApplication from './views/adoption-application.view'
import AdoptionApplicationList from './views/adoption-application-list.view'

const initialModel = {
	currentUser: null,
	authDetails: null
}

const view = function view(model, propose) {
	return m.route(document.body, '/login', {
		'/login': {
			render() {
				return m(Layout, m(Login))
			}
		},
		'/pets': {
			render() {
				return m(Layout, m(PetList))
			}
		},
		'/pets/add': {
			render() {
				return m(Layout, m(AddPet))
			}
		},
		'/pets/:id/adopt': {
			render() {
				return m(Layout, m(AdoptionApplication))
			}
		},
		'/applications': {
			render() {
				return m(Layout, m(AdoptionApplicationList))
			}
		}
	})
}

const Main = createComponent({
	view: view
})

run({
	renderer: renderer().intoId(document, 'app'),
	rootComponent: Main
})
