<script>
	import DeleteIcon from './DeleteIcon.svelte';
	import Select from './Select.svelte';
</script>

<div class="item">
	<Select />
	<button class="item__button"><DeleteIcon /></button>
</div>

<style lang="scss">
	@use '../../styles/colors.scss' as *;

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 450px;

		.item__button {
			background: transparent;
			border: none;
			cursor: pointer;
		}
	}
</style>
