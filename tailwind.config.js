/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'Madimi-One': ['Madimi One', 'sans-serif'],
			},
			colors: {
				'primary-purple': 'var(--primary-purple)',
				'custom-white': 'var(--white)',
				'custom-black': 'var(--black)',
				'secondary-green': 'var(--secondary-green)',
				'secondary-pink': 'var(--secondary-pink)',
			},
			backgroundColor: {
				'primary-purple': 'var(--primary-purple)',
				'custom-white': 'var(--white)',
				'custom-black': 'var(--black)',
				'secondary-green': 'var(--secondary-green)',
				'secondary-pink': 'var(--secondary-pink)',
			},
		},
	},
	plugins: [],
};
