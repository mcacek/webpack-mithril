var m = require('mithril')

module.exports = {
	view: function (vnode) {
		return m('main#layout-view', [
			m('nav.layout-view-nav', [
				m("a[href='/login']", {
					oncreate: m.route.link
				}, 'Login')
			]),
			m('section', vnode.children)
		])
	}
}
