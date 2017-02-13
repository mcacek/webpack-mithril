import m from 'mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

const Login = require('./views/login.view')
const Layout = require('./views/layout.view')

m.route(document.body, '/login', {
	'/login': {
		render: function () {
			return m(Layout, m(Login))
		}
	}
})
