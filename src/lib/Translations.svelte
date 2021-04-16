<script>
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { t } from 'svelte-intl-precompile';
    export let gender;
    export let count;
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
<p>{$t('date', { values: { today: now } })}</p>
<p>{$t('number', { values: { n: 123456789 } })}</p>
<p>{$t('number', { values: { n: 1.34 } })}</p>
<p>{$t('pluralized', { values: { count: 2 } })}</p>
<p>{$t('pluralized-with-hash', { values: { count } })}</p>
<p>{$t('selected', { values: { gender } })}</p>