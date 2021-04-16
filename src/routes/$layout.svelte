<script context="module">
	import { addMessages, init } from 'svelte-intl-precompile';
    import en from '../../locales/en.js';
    // import es from '../../locales/es.js';
	// @ts-ignore
    addMessages('en', en)
    // addMessages('es', es)

    init({
		fallbackLocale: 'en',
		initialLocale: 'en',
		formats: {
			time: {
				hour: { hour: 'numeric' }
			},
			date: {
				'abbr-full': { month: 'short', day: 'numeric', year: 'numeric' }
			},
			number: {
				percent: { style: 'percent' }
			}			
		}
	});
</script>

<script>
	import '../app.css';
</script>

<slot />
