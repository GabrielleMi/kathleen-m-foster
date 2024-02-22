/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			current: 'currentColor',
			inherit: 'inherit',
			black: '#000000',
			white: '#ffffff'
		},
		fontFamily: {
			sans: ['Roboto Condensed', 'sans-serif']
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
