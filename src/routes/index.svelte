<script>
	import Counter from '$lib/Counter.svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';
	let now = new Date();
	let gender = 'female';
	let count = 1;
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<main>
	<h1>Hello world!</h1>
	<p>{$t('plain')}</p>
	<p>{$t('interpolated', { values: { count: 123 }})}</p>
	<p>{$t('time', { values: { now: now } })}</p>
	<p>{$t('date', { values: { today: now } })}</p>
	<p>{$t('number', { values: { n: 123456789 } })}</p>
	<p>{$t('number', { values: { n: 1.34 } })}</p>
	<p>{$t('pluralized', { values: { count: 2 } })}</p>
	<p>{$t('pluralized-with-hash', { values: { count } })}</p>
	<p>{$t('selected', { values: { gender } })}</p>

	<Counter bind:count={count}/>
	<select bind:value={gender}>
		<option value="male">Male</option>
		<option value="female">Female</option>
		<option value="other">Other</option>
	</select>

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>

	<p>
		Change language: 
		{#each $locales as loc}
			<button type="button" class={loc === $locale && 'current-locale'} on:click={() => $locale = loc}>{loc}</button>
		{/each}
	</p>
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

	.current-locale {
		color: red;
	}
</style>
