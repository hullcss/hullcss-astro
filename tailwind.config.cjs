/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			
			// grayscale colors
			mono_1: 'hsl(220, 14%, 71%)',
			mono_2: 'hsl(220, 9%, 55%)',
			mono_3: 'hsl(220, 10%, 40%)',
			mono_4: 'hsl(220, 13%, 18%)',
			mono_5: 'hsl(220, 15%, 13%)',

			// hue colors
			hue_1a: 'hsl(187, 47%, 55%)',
			hue_2a: 'hsl(207, 82%, 66%)',
			hue_3a: 'hsl(286, 60%, 67%)',
			hue_4a: 'hsl(95, 38%, 62%)',
			hue_4b: 'hsl(03, 17%, 41%)',
			hue_5a: 'hsl(355, 65%, 65%)',
			hue_5b: 'hsl(  5, 48%, 51%)',
			hue_6a: 'hsl( 29, 54%, 61%)',
			hue_6b: 'hsl( 39, 67%, 69%)',

			// generic colors
			foreground: 'hsl(220, 14%, 71%)',
			background_1: 'hsl(220, 13%, 18%)',
			background_2: 'hsl(220, 15%, 13%)',
			// gutter: 'hsl(220, 9%, 55%)',
			gutter: 'hsl(220, 14%, 45%)',
			accent: 'hsl(220, 100%, 66%)',
		},

	},
	plugins: [],
}
