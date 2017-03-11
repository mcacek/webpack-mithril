import test from 'ava'
import m from 'mithril'

import Layout from '../../src/js/views/layout'

test('should render component', function (t) {
	const pageContents = m('hr')
	const vnode = Layout.view(pageContents)

	t.is(vnode.children.length, 2)
	t.is(vnode.children[0].children[0].text, 'Webpack Mithril')
	t.pass()
})
