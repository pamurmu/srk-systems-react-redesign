export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
				display: ['Cormorant Garamond', 'serif'],
			},
			colors: {
				ink: '#101a24',
				ivory: '#f8f2e7',
				brass: '#d3b16d',
				'brass-light': '#e4cb96',
				garnet: '#7f2e2e',
				mist: '#f6efe3',
			},
			boxShadow: {
				soft: '0 20px 60px rgba(16, 26, 36, 0.14)',
			},
		},
	},
	plugins: [],
};