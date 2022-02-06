<script lang="ts">
	import {
		apiUrl,
		authenticatedPost,
		Question,
		User,
		getReadableDate,
		showErrorPop,
		showSuccessPop,
gotoUserProfile,
	} from "./utils";
	import { appUser, isLoggedIn } from "$lib/auth";
	import MiniSpinner from "./MiniSpinner.svelte";
	let isLogged = false;
	let user: User;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	});
	appUser.subscribe((value) => {
		user = value;
	});
	export let question: Question;
	let miniSpin = false;
	function upvote() {
		let upvoteUrl = apiUrl + "questions/upvote/" + question._id;
		if (isLogged == true) {
			miniSpin = true;
			authenticatedPost(upvoteUrl, {})
				.then((value) => {
					question = value;
					miniSpin = false;
				})
				.catch((err) => {
					console.log(err);
					miniSpin = false;
				});
		} else {
			showErrorPop("you are not logged in");
		}
	}
	function downvote() {
		let downvoteUrl = apiUrl + "questions/downvote/" + question._id;
		if (isLogged == true) {
			miniSpin = true;
			authenticatedPost(downvoteUrl, {})
				.then((value) => {
					question = value;
					miniSpin = false;
				})
				.catch((err) => {
					console.log(err);
					miniSpin = false;
				});
		} else {
			showErrorPop("you are not logged in");
		}
	}
</script>

<div class="question-container">
	<div class="top-container">
		<section class="profile-sec">
			<a href="/profile/{question.askerDetail._id}">
				<div class="profile-container">
					<img
						src={question.askerDetail.photoUrl}
						alt={question.askerDetail.username}
						class="full-img"
					/>
				</div>
			</a>
		</section>
		<div class="basic-container">
			<div class="mini-info-container">
				<a href="/profile/{question.askerDetail._id}"><h3 class="username">{question.askerDetail.username}</h3></a>
				<div class="status-container flex-center">
					<h6 class="status">{question.askerDetail.status}</h6>
				</div>
				<h5 class="datetext">
					<span class="date"
						>{getReadableDate(question.created_at)}</span
					>
				</h5>
				<h5 class="reference">
					Reference: <span class="ref">{question.reference}</span>
				</h5>
			</div>
		</div>
	</div>
	<div class="title-container">
		<a
		sveltekit:prefetch
			href="questions/{question._id}"
			class="quest-title"
		>
			{question.name}
		</a>
	</div>
	<div class="middle-container">
		<div class="actions-container">
			<button
				class="up-btn btn"
				class:blue={question.upvotes.includes(user._id)}
				on:click={upvote}><i class="fas fa-sort-up" /></button
			>
			{#if miniSpin}
				<MiniSpinner />
			{:else}
				<h6 class="upvotes">
					{question.upvotes.length - question.downvotes.length}
				</h6>
			{/if}

			<button
				class="down-btn btn"
				class:blue={question.downvotes.includes(user._id)}
				on:click={downvote}><i class="fas fa-sort-down" /></button
			>
		</div>
		<div class="quest-details-container">
			<div class="quest-details">
				{@html question.details.html}
			</div>
			<div class="tags-container">
				<div class="tag">{question.subject}</div>
				{#if question.examType == "gce"}
					<div class="tag">GCE</div>
				{/if}
				{#if question.examType == "mock"}
					<div class="tag">MOCK</div>
					<div class="tag">{question.region}</div>
				{/if}
				{#if question.examType == "gce" || question.examType == "mock"}
					<div class="tag">year: {question.year}</div>
					<div class="tag">paper: {question.paper}</div>
				{/if}
				<div class="tag">
					question number: {question.questionNumber}
				</div>
			</div>
			<div class="bottom-container">
				<h6 class="answers">
					<a
						sveltekit:prefetch
						href="questions/{question._id}"
						class="quest-title"
					>
						<i class="fas fa-book" />{question.answers.length} answers</a
					>
				</h6>
				<h6 class="answers">
					<a
						sveltekit:prefetch
						href="questions/{question._id}"
						class="quest-title"
					>
						<i class="fas fa-comment-dots" />{question.comments
							.length} comments</a
					>
				</h6>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import "../styles.scss";
	.question-container {
		background-color: white;
		width: 100%;
		padding: 30px;
		margin-bottom: 2px;
		@include mqx(1200px) {
			padding: 30px 5px;
		}
		.top-container {
			display: flex;
			margin-bottom: 10px;
			align-items: center;
			.profile-sec {
				min-width: 60px;
				margin-right: 5px;
				.profile-container {
					width: 100%;
					height: 60px;
					border-radius: 50%;
					border: 2px solid var(--bluish);
					overflow: hidden;
				}
				@include mqx(800px) {
					min-width: 35px;
					margin-right: 5px;
					.profile-container {
						min-width: 35px;
						max-width: 36px;
						height: 35px;
					}
				}
			}
			.basic-container {
				.mini-info-container {
					display: flex;
					align-items: center;
					margin-bottom: 5px;
					.username {
						font-size: 15px;
						font-weight: 600;
						color: var(--bluish);
						margin-right: 10px;
						@include mqx(800px) {
							font-size: 0.6rem;
							margin-right: 2px;
						}
					}
					.status-container {
						padding: 3px 10px;
						background-color: blueviolet;
						margin-right: 10px;
						.status {
							color: white;
							font-size: 10px;
						}
						@include mqx(800px) {
							padding: 3px;
							margin-right: 2px;
						}
					}
					.datetext,
					.reference {
						font-size: 12px;
						.date {
							color: var(--bluish);
						}
						@include mqx(800px) {
							font-size: 0.5rem;
						}
					}
					.reference {
						margin-left: 5px;
						color: var(--greenish);
					}
				}
			}
		}
		.title-container {
			margin-bottom: 10px;
			margin-left: 50px;
			.quest-title {
				font-size: 1rem;
				font-weight: 700;
				color: rgb(37, 37, 37);
				cursor: pointer;
				&:hover {
					color: var(--bluish);
				}
			}
			@include mqx(800px) {
				margin-left: 0;
				.quest-title {
					font-size: 0.8rem;
				}
			}
		}
		.middle-container {
			display: flex;
			overflow: hidden;
			.actions-container {
				height: 100px;
				margin-right: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.btn {
					background-color: transparent;
					width: fit-content;
					font-size: 25px;
					color: gray;
					margin: 0;
					&:hover {
						color: var(--bluish);
					}
					@include mqx(800px) {
						font-size: 1.2rem;
					}
				}

				.blue {
					color: var(--bluish);
				}
			}
			.quest-details-container {
				width: 100%;
				.quest-details {
					width: 100%;
					max-height: 150px;
					overflow: hidden;
					margin-bottom: 5px;
				}
				.tags-container {
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 10px;
					.tag {
						border: 1px solid gray;
						padding: 2px 10px;
						margin-right: 10px;
						margin-bottom: 5px;
						@include mqx(800px) {
							font-size: 0.7rem;
						}
					}
				}
				.bottom-container {
					display: flex;
					.answers {
						margin-right: 10px;
						font-weight: 300;
						color: gray;
						cursor: pointer;
						&:hover {
							color: black;
						}
						i {
							margin-right: 5px;
						}
						@include mqx(800px) {
							font-size: 0.8rem;
						}
					}
				}
			}
		}
	}
</style>
