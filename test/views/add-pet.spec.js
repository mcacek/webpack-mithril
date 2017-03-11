import test from 'ava'
import AddPetView from '../../src/js/views/add-pet'

test('should render component', function (t) {
	const vnode = AddPetView.view()
	t.is(vnode.children.length, 1)
	t.is(vnode.children[0].tag, 'h2')
	t.is(vnode.children[0].text, 'Add Pet')
	t.pass()
})
