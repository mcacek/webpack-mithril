import test from 'ava'
import PetList from '../../src/js/views/pet-list'

test('should render component', function (t) {
	const vnode = PetList.view()

	t.is(vnode.children.length, 2)
	t.is(vnode.children[0].tag, 'h2')
	t.is(vnode.children[0].text, 'Adoptable Pets')
	t.pass()
})
