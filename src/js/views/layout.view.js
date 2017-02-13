var m = require('mithril')

module.exports = {
	view: function (vnode) {
		return m('main.layout', [
			m('nav.menu', [
				m("a[href='/login']", {
					oncreate: m.route.link
				}, 'Login')
			]),
			m('section', vnode.children)
		])
	}
}
