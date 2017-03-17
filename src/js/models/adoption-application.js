import m from 'mithril'

const AdoptionApplication = {
	newApplication: {},
	applicationReview: {},
	submitApplication() {
		return m
			.request({
				method: 'POST',
				url: 'http://localhost:8001/api/applications',
				data: AdoptionApplication.newApplication,
				withCredentials: true
			})
	},
	approveApplication() {
		return m
			.request({
				method: 'POST',
				url: `http://localhost:8001/api/applications/${AdoptionApplication.applicationReview.id}/approve`,
				data: AdoptionApplication.newApplication,
				withCredentials: true
			})
	},
	denyApplication() {
		return m
			.request({
				method: 'POST',
				url: `http://localhost:8001/api/applications/${AdoptionApplication.applicationReview.id}/deny`,
				data: AdoptionApplication.newApplication,
				withCredentials: true
			})
	}
}

export default AdoptionApplication
