<script context="module" lang="ts">
	// export const prerender = true;
	import type { Load } from "@sveltejs/kit";
	import {
		get,
		authenticatedPost,
		apiUrl,
		Question,
		showErrorPop,
	} from "$lib/utils";
	export const load: Load = async () => {
		let questionssUrl = apiUrl + "questions/all";
		let subjectsUrl = apiUrl + "subjects/all";
		const subjects = await get(subjectsUrl);
		const data = await get(questionssUrl);
		const questions = data.questions;
		const page = data.page;
		const total = data.total;
		const lastPage = data.last_page;
		return {
			props: { questions, subjects, page, total, lastPage },
		};
	};
</script>

<script lang="ts">
	import Counter from "$lib/Counter.svelte";
	import SingleQuestion from "$lib/SingleQuestion.svelte";
	import { isLoggedIn } from "$lib/auth";
	import BasicSpinner from "$lib/BasicSpinner.svelte";
	import { appName } from "$lib/utils";
	// import { onMount } from "svelte";

	export let questions: Question[];
	export let page: number;
	export let lastPage: number;
	export let total: number;
	export let subjects;
	questions = questions.sort((a, b) => {
		return (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime();
	})
	let examTypes = ["gce", "mock", "miscellaneous"];
	let isLogged = false;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	});

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
	let spin = false;
	function moveToPage(page) {
		questions = [];
		spin = true;
		let searchUrl =
			apiUrl +
			"questions/all?" +
			new URLSearchParams([["page", `${page}`]]);
		get(searchUrl)
			.then((value) => {
				spin = false;
				console.log(value);
				questions = value.questions;
				page = value.page;
				lastPage = value.last_page;
				total = value.total;
			})
			.catch((err) => {
				spin = false;
				showErrorPop(err);
			});
	}

	function filter() {
		// questions = [];
		spin = true;
		let searchUrl =
			apiUrl +
			"questions/all?" +
			new URLSearchParams([["subject", `${selectedSubject}`]]);
		get(searchUrl)
			.then((value) => {
				spin = false;
				console.log(value);
				questions = value.questions;
				page = value.page;
				lastPage = value.last_page;
				total = value.total;
			})
			.catch((err) => {
				spin = false;
				showErrorPop(err);
			});
	}

	function removeFilter() {
		// questions = [];
		spin = true;
		let subjectsUrl = apiUrl + "questions/all";
		get(subjectsUrl)
			.then((value) => {
				console.log(value);
				spin = false;
				questions = value.questions;
				page = value.page;
				lastPage = value.last_page;
				total = value.total;
			})
			.catch((err) => {
				spin = false;
				showErrorPop(err);
			});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="{appName} is a social questions & Answers Engine which will help you solve exam related questions and permit you to help others answer their questions">
</svelte:head>

<div class="home-container">
	<section class="ask-sec white-bg">
		{#if isLogged}
			<div class="ask-container">
				<i class="fas fa-user-circle profile-icon" />
				<a href="/ask-question" class="ask-btn">
					<i class="fas fa-comments" />
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
				<label for="years" class="form-label">year</label>
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
				<label for="subject" class="form-label">subject</label>
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
				<label for="exam" class="form-label">exam type</label>
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
			<button type="button" class="btn btn-primary" on:click={filter}
				>filter</button
			>
			<button type="button" class="btn btn-danger" on:click={removeFilter}
				>remove filter</button
			>
		</div>
	</section>
	<section class="questions-sec">
		{#if questions.length > 0}
			{#each questions as question}
				<SingleQuestion {question} />
			{/each}
		{/if}
		{#if questions.length == 0 && spin == false}
			<div class="empty-container">
				<h2>no questions found</h2>
			</div>
		{/if}
		{#if spin}
			<div class="empty-container">
				<BasicSpinner />
			</div>
		{/if}
	</section>
	<section class="page-btn-sec">
		<div class="btns-container">
			{#each Array(lastPage) as pageBtn, i}
				<button
					class="page-btn"
					class:active-btn={page == i + 1}
					on:click={() => moveToPage(i + 1)}>{i + 1}</button
				>
			{/each}
		</div>
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
		background-color: #f2f2f2;
		.empty-container {
			width: 100%;
			text-align: center;
			background-color: white;
			padding: 20px 0;
		}
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

	.page-btn-sec {
		padding: 20px 10px;
	}
	.btns-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.page-btn {
			padding: 10px 20px;
			background-color: var(--bluish);
			color: white;
			margin-right: 5px;
			margin-bottom: 10px;
			&:hover {
				background-color: var(--text-color);
			}
		}
		.active-btn {
			background-color: var(--text-color);
		}
	}
</style>
