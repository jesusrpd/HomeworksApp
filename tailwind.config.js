// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme =>({
				'banner': "url('/src/assets/img/banner.png')"
			})
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}