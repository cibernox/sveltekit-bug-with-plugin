<script context="module">
	import { addMessages, init } from 'precompile-intl-runtime';
    import en from '../../locales/en.js';
    import es from '../../locales/es.js';
	// @ts-ignore
    addMessages('en', en)
    addMessages('es', es)

    init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
</script>

<script>
	import '../app.css';
</script>

<slot />
