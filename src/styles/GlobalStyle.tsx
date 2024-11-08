// eslint-disable-next-line import/no-extraneous-dependencies
// import "antd/dist/reset.css";

const GlobalStyle = () => {
	return (
		<style jsx global>{`
			.hideScrollbar {
				height: auto;
				-ms-overflow-style: none;
				scrollbar-width: none;
				&::-webkit-scrollbar {
					display: none;
				}
			}

			html,
			body,
			* {
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				margin: 0;
				font-family: system-ui;
			}
			h1,
			h2,
			h3,
			h4,
			h5 {
				padding: 0;
				margin: 0;
				font-weight: normal;
			}

			p {
				padding: 0;
				margin: 0;
			}

			ul,
			li {
				padding: 0;
				margin: 0;
				list-style-type: none;
				padding-inline-start: 0px;
				margin-block-start: 0;
				margin-block-end: 0;
				line-height: 1;
			}

			ol li,
			ul li {
				line-height: 1.5em;
			}

			hr {
				border-top: 1px solid #dadada;
			}

			a,
			a:hover,
			a:active {
				text-decoration: none;
			}

			img {
				max-width: 100%;
				display: block;
			}

			select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				border: 0;
				background: none;
			}

			pre {
				margin-bottom: 0;
			}
			code.hljs {
				padding: 0.8rem;
			}

			/* Chrome, Safari, Edge, Opera */
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
			// Auto Complete input

			/* Change the white to any color */
			input:-webkit-autofill,
			input:-webkit-autofill:hover,
			input:-webkit-autofill:focus,
			input:-webkit-autofill:active {
				-webkit-box-shadow: 0 0 0 30px #fff inset !important;
			}
			/*Change text in autofill textbox*/
			input:-webkit-autofill {
				-webkit-text-fill-color: #000 !important;
			}

			/* Firefox */
			input[type="number"] {
				-moz-appearance: textfield;
			}

			// .aboutcontent {
			// 	.articledetail__content {
			// 		p {
			// 			text-align: center !important;
			// 		}
			// 	}
			// }

			.errors {
				margin-top: 5px;
			}
		`}</style>
	);
};

export default GlobalStyle;
