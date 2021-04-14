// const node = require('@sveltejs/adapter-node');
const netlify = require('@sveltejs/adapter-netlify')
const pkg = require('./package.json');
const babel = require('@babel/core');
const intlPrecompiler = require("babel-plugin-precompile-intl");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},

			optimizeDeps: {
				exclude: ['precompile-intl-runtime']
			},

            plugins: [
                svelteIntlPrecompile('locales')
            ]			
		}
	}
};

function svelteIntlPrecompile(root) {  
	return {
	  	name: 'my-plugin', // required, will show up in warnings and errors
		transform(code, id) {			
			if (id.indexOf('locales') > -1) {
				debugger;
				debugger;
				return babel.transform(code, {
					plugins: [intlPrecompiler]
				}).code;
			}
		}
	}
}
