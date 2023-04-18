<script lang="ts">
	import '../lib/styles/styles.scss';
</script>

<div class="container">
	<div class="todo">
		<header class="header">
			<!-- TODO: Add function that return correct date -->
			<h1 class="header__day">Wtorek</h1>
			<p class="header__date">18.04.2023</p>
		</header>
		<div class="container__form">
			<form class="form" action="">
				<input
					type="text"
					name="todo"
					id="todo"
					class="form__control__input"
					placeholder="Add new task"
				/>

				<input class="form__submit" type="button" value="Add" />
			</form>
		</div>
		<div class="container__items">
			<div class="item">
				<div class="item__text">
					<input class="item__checkbox" type="checkbox" name="" id="" checked />
					<p class="item__name">bla bla bla</p>
				</div>
				<button class="item__button"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0,0,256,256"
						width="20px"
						height="20px"
						fill-rule="nonzero"
						><g
							fill="none"
							fill-rule="nonzero"
							stroke="none"
							stroke-width="1"
							stroke-linecap="butt"
							stroke-linejoin="miter"
							stroke-miterlimit="10"
							stroke-dasharray=""
							stroke-dashoffset="0"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
							style="mix-blend-mode: normal"><path d="M0,256v-256h256v256z" id="bgRectangle" /></g
						><g
							fill="#ffffff"
							fill-rule="nonzero"
							stroke="none"
							stroke-width="1"
							stroke-linecap="butt"
							stroke-linejoin="miter"
							stroke-miterlimit="10"
							stroke-dasharray=""
							stroke-dashoffset="0"
							font-family="none"
							font-weight="none"
							font-size="none"
							text-anchor="none"
							style="mix-blend-mode: normal"
							><g transform="scale(5.12,5.12)"
								><path
									d="M21,2c-1.64545,0 -3,1.35455 -3,3v2h-7.8457c-0.05615,-0.00939 -0.113,-0.01396 -0.16992,-0.01367c-0.04844,0.00105 -0.09675,0.00562 -0.14453,0.01367h-1.83984c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h1v36c0,1.64545 1.35455,3 3,3h26c1.64545,0 3,-1.35455 3,-3v-36h1c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.83203c-0.10799,-0.01785 -0.21818,-0.01785 -0.32617,0h-7.8418v-2c0,-1.64545 -1.35455,-3 -3,-3zM21,4h8c0.55455,0 1,0.44545 1,1v2h-10v-2c0,-0.55455 0.44545,-1 1,-1zM11,9h7.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h7.8418v36c0,0.55454 -0.44546,1 -1,1h-26c-0.55454,0 -1,-0.44546 -1,-1zM18.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM24.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM30.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"
								/></g
							></g
						></svg
					></button
				>
			</div>
		</div>
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

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem 0;
		gap: 0.5rem;

		.header__day {
			font-size: 2rem;
			letter-spacing: 1px;
		}
		.header__date {
			font-weight: 300;
			color: $text-color-secondary;
		}
	}

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

	.container__items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		align-items: center;
		margin-bottom: 2rem;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 450px;

		.item__text {
			display: flex;
		}

		.item__button {
			background: transparent;
			border: none;
			cursor: pointer;
		}
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
