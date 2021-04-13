const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const babel = require('@babel/core');
const intlPrecompiler = require("babel-plugin-precompile-intl");


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
            plugins: [
                // myPlugin()
            ]			
		}
	}
};

// function myPlugin() {  
// 	return {
// 	  	name: 'my-plugin', // required, will show up in warnings and errors
// 		transform(code, id, ssr) {			
// 			if (id.indexOf('locales/en') > -1) {
// 				return babel.transform(code, {
// 					plugins: [intlPrecompiler]
// 				}).code
// 			}
// 		}
// 	}
// }
