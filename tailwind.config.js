// tailwind.config.js

const Nth =  require('tailwindcss-nth-child');
const plugin =  new  Nth('odd');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme =>({
				'banner': "url('/src/assets/img/banner.png')"
			}),
			animation:{
				aparecer: 'aparecer .5s ease-in-out both'
			},
			keyframes:{
				aparecer: {
					'0%': {tranform: 'translateY(-100px)', opacity: '0'},
					'100%':{transform: 'translateY(50px)', opacity: '1'}
				}
			}
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked', 'odd'],
      		borderColor: ['checked'],
		},
	},
	plugins: [require('@tailwindcss/forms'), plugin.nthChild()],
}