import m from 'mithril'

export default {
	view(vnode) {
		return m('.pet', `${vnode.attrs.name} (${vnode.attrs.age})`)
	}
}
