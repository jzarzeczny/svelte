<script lang="ts">
	import Item from './Item.svelte';

	interface Item {
		value: string;
		_id: string;
		done: boolean;
	}

	export let items: Item[];
</script>

<div class="container__items">
	{#each items as item}
		<Item {item} />
	{/each}
</div>

<style lang="scss">
	@use '../../styles/colors.scss' as *;

	.container__items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		align-items: center;
		margin-bottom: 2rem;
	}
</style>
