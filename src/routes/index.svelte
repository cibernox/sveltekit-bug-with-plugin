<script>
	import Counter from '$lib/Counter.svelte';
	import { _ } from 'precompile-intl-runtime';
	let now = new Date();
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<main>
	<h1>Hello world!</h1>
	<p>{$_('plain')}</p>
	<p>{$_('interpolated', { values: { count: 123 }})}</p>
	<p>{$_('time', { values: { now: now } })}</p>
	<p>{$_('date', { values: { today: now } })}</p>
	<p>{$_('number', { values: { n: 123456789 } })}</p>
	<p>{$_('number', { values: { n: 1.34 } })}</p>
	<p>{$_('pluralized', { values: { count: 2 } })}</p>
	<p>{$_('pluralized-with-hash', { values: { count: 1 } })}</p>
	<p>{$_('selected', { values: { gender: 'female' } })}</p>

	<Counter />

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
