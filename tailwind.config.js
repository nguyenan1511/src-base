/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	corePlugins: {
		preflight: false,
	},
	theme: {
		darkMode: "class",
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
					950: "#172554",
				},
			},
			screens: {
				_lg: { max: "1440px" },
				_lgs: { max: "1366px" },
				_md: { max: "1199.98px" },
				_sm: { max: "991.98px" },
				_xs: { max: "767.98px" },
				_xxs: { max: "575.98px" },
				_mbs: { max: "375px" },
				desLg: { min: "1660px" },
			},
		},
		fontFamily: {},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio")],
};
