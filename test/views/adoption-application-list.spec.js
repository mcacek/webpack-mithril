import test from 'ava'
import AdoptionApplicationList from '../../src/js/views/adoption-application-list'

test('should render component', function (t) {
	const vnode = AdoptionApplicationList.view()
	t.is(vnode.children.length, 1)
	t.is(vnode.children[0].tag, 'h2')
	t.is(vnode.children[0].text, 'Applications')
	t.pass()
})
