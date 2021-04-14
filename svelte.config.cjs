// const node = require('@sveltejs/adapter-node');
const netlify = require('@sveltejs/adapter-netlify')
const pkg = require('./package.json');
const babel = require('@babel/core');
const intlPrecompiler = require("babel-plugin-precompile-intl");
const path = require('path');

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
			
            plugins: [
                svelteIntlPrecompile('locales')
            ]			
		}
	}
};

function svelteIntlPrecompile(localesRoot) {  
	return {
	  	name: 'svelte-intl-precompile', // required, will show up in warnings and errors
		transform(code, id) {	
			if (id.includes(path.resolve(localesRoot))) {
				return babel.transform(code, {
					plugins: [intlPrecompiler]
				}).code;
			}
		}
	}
}
