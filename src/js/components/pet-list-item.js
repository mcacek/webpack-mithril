import m from 'mithril'

export default {
	view(vnode) {
		return m('.col-4',
			m('.pet.card', [
				m(`.pet-avatar`, vnode.attrs.name.slice(0, 1)),
				m('.pet-card-name', `${vnode.attrs.name} (${vnode.attrs.age})`),
				m('.card-controls', [
					m('a[href="#"]', 'Adopt'),
					m('a[href="#"]', 'Share')
				])
			])
		)
	}
}
