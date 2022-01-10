<script context="module" lang="ts">
	// export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import SingleQuestion from "$lib/SingleQuestion.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="home-container">
	<section class="ask-sec white-bg">
		<div class="ask-container">
			<i class="fas fa-user-circle profile-icon"></i>
			<a href="/ask-question" class="ask-btn">
				<i class="fas fa-comments"></i>
				What's your question?
			</a>
		</div>
	</section>
	<section class="buttons-sec">
		<div class="btns-container">
			<button class="quest-btn active">recent questions</button>
			<button class="quest-btn">popular questions</button>
			<button class="quest-btn">most answered</button>
			<button class="quest-btn">unanswered questions</button>
			<button class="quest-btn">recent questions</button>
		</div>
	</section>
	<section class="questions-sec">
		<SingleQuestion />
		<SingleQuestion />
		<SingleQuestion />
	</section>
</div>

<style lang="scss">
	.white-bg {
		background-color: white;
	}
	.home-container {
		width: 100%;
	}

	section {
		width: 100%;
		background-color: white;
	}
	.ask-sec {
		width: 100%;
		padding: 20px 0;
		margin-bottom: 3px;

		.ask-container {
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;

			.profile-icon {
				font-size: 30px;
				margin-right: 10px;
				color: var(--grayish);
			}
			.ask-btn {
				width: 90%;
				padding: 5px 5px;
				background-color: white;
				border: 1px solid var(--grayish);
				color: gray;
				text-align: left;
				&:hover {
					color: var(--bluish);
					border: 1px solid var(--bluish);
				}
			}
		}
	}

	

	.buttons-sec {
		margin-bottom: 3px;
	}
	.btns-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.quest-btn {
			width: 18%;
			padding: 25px 5px;
			font-size: 13px;
			color: gray;
			background-color: white;
			text-transform: capitalize;
			font-weight: 600;
			&:hover {
				color: black;
			border-bottom: 2px solid black;
			}
		}
		.active {
			color: black;
			border-bottom: 2px solid black;
		}
	}

	.questions-sec {
		background-color: #F2F2F2;
	}
	
</style>
