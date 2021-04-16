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
{$t('plain')}
{$t('interpolated', { values: { count: 123 }})}
{$t('time', { values: { now: now } })}
{$t('time-custom-format', { values: { now: now } })}
{$t('date', { values: { today: now } })}
{$t('date-custom-format', { values: { today: now } })}
{$t('number', { values: { n: 123456789 } })}
{$t('percent', { values: { n: 0.134 } })}
{$t('pluralized', { values: { count: 2 } })}
{$t('pluralized-with-hash', { values: { count } })}
{$t('selected', { values: { gender } })}