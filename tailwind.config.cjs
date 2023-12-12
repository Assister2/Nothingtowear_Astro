/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
	// './node_modules/flowbite/**/*.js'
	// "./node_modules/tw-elements/dist/js/**/*.js", 
	// "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
			  sans: ["InterVariable", "Inter"],
			  roboto: ["Roboto"]
			},
		  },
		screens: {
			'sm' : '375px',
			'md' : '1024px',
			'lg' : '1440px'
		},
		boxShadow: {
			'pro' : '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
		}
	},
	plugins: [
			// require("tw-elements/dist/plugin.cjs"), 
			//   require('@tailwindcss/forms'),
			// require('flowbite/plugin')
			// require("daisyui")
			],
}
