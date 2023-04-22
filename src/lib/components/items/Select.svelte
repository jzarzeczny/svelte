<div class="item__text">
	<input class="item__checkbox" type="checkbox" name="" id="" />
	<p class="item__name">bla bla bla</p>
</div>

<style lang="scss">
	@use '../../styles/colors.scss' as *;
	.item__text {
		display: flex;
	}

	input[type='checkbox'] {
		appearance: none;
		background-color: $secondary-color;
		margin: 0;
		font: inherit;
		color: currentColor;
		width: 1.15em;
		height: 1.15em;
		border: 2px solid $primary-color;
		border-radius: 0.15em;
		transform: translateY(-0.075em);
		margin-right: 0.5rem;
		display: grid;
		place-content: center;
	}
	input[type='checkbox']::before {
		content: '';
		width: 0.65em;
		height: 0.65em;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em $text-color;
		transform-origin: bottom left;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	input[type='checkbox'] {
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		/* Remove most all native input styles */
		appearance: none;
		/* For iOS < 15 */
		background-color: $secondary-color;
		/* Not removed via appearance */
		margin: 0;

		font: inherit;
		color: currentColor;
		width: 1.15em;
		height: 1.15em;
		border: 1px solid $primary-color;
		border-radius: 0.15em;
		transform: translateY(-0.075em);

		display: grid;
		place-content: center;
		margin-right: 0.5rem;
	}

	input[type='checkbox']::before {
		content: '';
		width: 0.65em;
		height: 0.65em;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
		transform: scale(0);
		transform-origin: bottom left;
		transition: 120ms transform ease-in-out;
		box-shadow: inset 1em 1em $success-color;
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}
</style>
