const node = require('@sveltejs/adapter-netlify')
// const netlify = require('@sveltejs/adapter-node')
const pkg = require('./package.json');
const precompileIntl = require("svelte-intl-precompile/sveltekit-plugin.cjs");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			
            plugins: [
                precompileIntl('locales')
            ]			
		}
	}
};

// function svelteIntlPrecompile(localesRoot) {  
// 	return {
// 	  	name: 'svelte-intl-precompile', // required, will show up in warnings and errors
// 		transform(code, id) {	
// 			if (id.includes(path.resolve(localesRoot))) {
// 				return babel.transform(code, {
// 					plugins: [intlPrecompiler]
// 				}).code;
// 			}
// 		}
// 	}
// }
