import m from 'mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

const Layout = require('./views/layout')
const Login = require('./views/login')
const PetList = require('./views/pet-list')
const AddPet = require('./views/add-pet')
const AdoptionApplication = require('./views/adoption-application')
const AdoptionApplicationList = require('./views/adoption-application-list')

m.route(document.body, '/login', {
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
