<script context="module" lang="ts">
    // export const prerender = true;
    import type { Load } from '@sveltejs/kit';
    import { get, authenticatedPost, apiUrl, Question } from "$lib/utils";
    export const load: Load = async ({ fetch }) => {
        let questionssUrl = apiUrl+"questions/all";
		let subjectsUrl = apiUrl+"subjects/all";
		const subjects = await get(subjectsUrl);
		const questions = await get(questionssUrl);
        return {
            props: { questions,subjects }
        }
	};
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import SingleQuestion from "$lib/SingleQuestion.svelte";
	import { isLoggedIn } from "$lib/auth";
	import { onMount } from "svelte";

	export let questions:Question[];
	export let subjects;
	let examTypes = ["gce", "mock", "miscellaneous"];
	onMount(() => {
		console.log(questions);
	});
	let isLogged = false;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	})

	function generateYears() {
        let years = [];
        for (let index = 1970; index < 2023; index++) {
            years.push(index);
        }
        return years;
    }

	let selectedYear;
	let selectedSubject;
	let selectedExam;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="home-container">
	<section class="ask-sec white-bg">
		{#if isLogged}
		<div class="ask-container">
			<i class="fas fa-user-circle profile-icon"></i>
			<a href="/ask-question" class="ask-btn">
				<i class="fas fa-comments"></i>
				What's your question?
			</a>
		</div>
		{/if}
		
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
	<section class="filter-sec">
		<h2 class="title">filter</h2>
		<div class="filters-container">
			<div class="select-container">
				<label for="years" class="form-label"
					>year</label
				>
				<select
					class="form-select"
					name="years"
					aria-label="Default select example"
					bind:value={selectedYear}
				>
					{#each generateYears() as year}
						<option value={year}>{year}</option>
					{/each}
				</select>
			</div>
			<div class="select-container">
				<label for="subject" class="form-label"
					>subject</label
				>
				<select
				class="form-select"
				name="subject"
				aria-label="Default select example"
				bind:value={selectedSubject}
				required
			>
				{#each subjects as subject}
					<option value={subject.name}>{subject.name}</option>
				{/each}
			</select>
			</div>
			<div class="select-container">
				<label for="exam" class="form-label"
					>exam type</label
				>
				<select
				class="form-select"
				name="exam"
				aria-label="Default select example"
				bind:value={selectedExam}
				required
			>
				{#each examTypes as exam}
					<option value={exam}>{exam}</option>
				{/each}
			</select>
			</div>
			<button type="button" class="btn btn-primary">filter</button>
		</div>
	</section>
	<section class="questions-sec">
		{#each questions as question}
			<SingleQuestion question={question} />
		{/each}
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

	.filter-sec {
		margin-bottom: 3px;
		padding: 20px 10px;
		.title {
			font-size: 1.5rem;
			margin-bottom: 5px;
		}
	}
	.filters-container {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
                .select-container {
					display: flex;
					align-items: center;
					margin-right: 10px;
					margin-bottom: 10px;
					label {
						margin-right: 3px;
					}
                    .form-select {
                        width: 150px;
                    }
                }
            
	}
	
</style>
