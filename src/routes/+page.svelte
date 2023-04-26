<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import Header from '$lib/components/Header.svelte';
	import Items from '$lib/components/items/Items.svelte';
	import '../lib/styles/styles.scss';

	export let data;
</script>

<div class="container">
	<div class="todo">
		<Header />
		<Form />
		<Items items={data.posts} />
	</div>
</div>

<style lang="scss">
	@use '../lib/styles/colors' as *;
	.container {
		display: flex;
		width: 100%;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
	}
	.todo {
		background-color: $secondary-color;
		border-radius: 8px;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 60ch;
	}
</style>
