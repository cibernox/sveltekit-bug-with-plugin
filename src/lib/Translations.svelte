<script>
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { t } from 'svelte-intl-precompile';
    export let gender;
    export let count;
    export let ssr = false;
	beforeUpdate(() => {
		console.time('Render time')
	});
	afterUpdate(() => {
		console.timeEnd('Render time')
	});

    let now = new Date();
</script>
<p>{$t('plain')}</p>
<p>{$t('interpolated', { values: { count: 123 }})}</p>
<p>{$t('time', { values: { now: now } })}</p>
<p>{$t('time-custom-format', { values: { now: now } })}</p>
<p>{$t('date', { values: { today: now } })}</p>
<p>{$t('date-custom-format', { values: { today: now } })}</p>
<p>{$t('number', { values: { n: 123456789 } })}</p>
<p>{$t('percent', { values: { n: 0.134 } })}</p>
<p>{$t('pluralized', { values: { count: 2 } })}</p>
<p>{$t('pluralized-with-hash', { values: { count } })}</p>
<p>{$t('selected', { values: { gender } })}</p>