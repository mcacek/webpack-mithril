import test from 'ava'
import Login from '../../src/js/views/login'

test('should render component', function (t) {
	const vnode = Login.view()
	t.is(vnode.children.length, 2)
	t.is(vnode.children[0].tag, 'h2')
	t.is(vnode.children[0].text, 'User Signin')
	t.pass()
})
