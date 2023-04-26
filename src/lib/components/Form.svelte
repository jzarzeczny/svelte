<script lang="ts">
</script>

<div class="container__form">
	<form class="form" method="POST" action="?/add">
		<input
			type="text"
			name="todo"
			id="todo"
			class="form__control__input"
			placeholder="Add new task"
		/>

		<input class="form__submit" type="submit" value="Add" />
	</form>
</div>

<style lang="scss">
	@use '../styles/colors.scss' as *;

	.container__form {
		width: 100%;
		padding: 1rem 0;
		.form {
			display: flex;
			justify-content: center;
			width: 100%;
		}
		.form__control__input {
			width: 400px;
			outline: none;
			border: none;
			background-color: $primary-color;
			color: #fff;
			padding: 8px;
			border-radius: 5px 0 0 5px;
			border: 1px solid $background-color;

			&:focus {
				outline: none;
			}
		}
		.form__submit {
			display: block;
			padding: 6px 18px;
			background-color: $background-color;
			color: $text-color;
			border: none;
			border-radius: 0 5px 5px 0;
			cursor: pointer;
			position: relative;
		}
	}
</style>
