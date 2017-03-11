import test from 'ava'
import AdoptionApplication from '../../src/js/views/adoption-application'

test('should render component', function (t) {
	const vnode = AdoptionApplication.view()
	t.is(vnode.children.length, 1)
	t.is(vnode.children[0].tag, 'h2')
	t.is(vnode.children[0].text, 'Adoption Application')
	t.pass()
})
