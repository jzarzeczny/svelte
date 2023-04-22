<script>
	import Item from './Item.svelte';
</script>

<div class="container__items">
	<Item />
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
