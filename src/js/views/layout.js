var m = require('mithril')

export default {
	view: function (vnode) {
		return m('main#layout-view', [
			m('nav.layout-view-nav', [
				m('h1.app-title', 'Webpack Mithril')
			]),
			m('section.container', vnode.children)
		])
	}
}
