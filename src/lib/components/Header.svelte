<header class="header">
	<!-- TODO: Add function that return correct date -->
	<h1 class="header__day">Wtorek</h1>
	<p class="header__date">18.04.2023</p>
</header>

<style lang="scss">
	@use '../styles/colors.scss' as *;
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
</style>
