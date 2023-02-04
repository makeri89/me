/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				card: '0px 5px 8px 1px #64748b'
			}
		},
	},
	plugins: [],
}
