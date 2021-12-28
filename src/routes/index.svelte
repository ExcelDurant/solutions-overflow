<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="home-container">
	<section class="ask-sec white-bg">
		<div class="ask-container">
			<i class="fas fa-user-circle profile-icon"></i>
			<button class="ask-btn">
				<i class="fas fa-comments"></i>
				What's your question?
			</button>
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
		<div class="question-container">
			<div class="top-container">
				<div class="profile-container">
					<img src="avatar1.png" alt="" class="full-img">
				</div>
				<div class="basic-container">
					<div class="mini-info-container">
						<h3 class="username">Excel Durant</h3>
						<div class="status-container flex-center">
							<h6 class="status">beginner</h6>
						</div>
						<h5 class="datetext">Asked on: <span class="date">December 22, 2021</span></h5>
					</div>
					<div class="title-container">
						<h2 class="quest-title">
							Is this statement, “i see him last night” can be understood as “I saw him last night”?
						</h2>
					</div>
				</div>
			</div>
			<div class="middle-container">
				<div class="actions-container">
					<button class="up-btn btn"><i class="fas fa-sort-up"></i></button>
					<h6 class="upvotes">132</h6>
					<button class="down-btn btn"><i class="fas fa-sort-down"></i></button>
				</div>
				<div class="quest-details-container">
					<p class="quest-details">
						In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english. I saw him last night (correct) I see him last night ...
					</p>
					<div class="tags-container">
						<div class="tag">mathematics</div>
					</div>
					<div class="bottom-container">
						<h6 class="answers"><i class="fas fa-book"></i>4 answers</h6>
						<h6 class="answers"><i class="fas fa-comment-dots"></i>8 comments</h6>
					</div>
				</div>
			</div>

		</div>
		<div class="question-container">
			<div class="top-container">
				<div class="profile-container">
					<img src="avatar1.png" alt="" class="full-img">
				</div>
				<div class="basic-container">
					<div class="mini-info-container">
						<h3 class="username">Martin Hope</h3>
						<div class="status-container flex-center">
							<h6 class="status">beginner</h6>
						</div>
						<h5 class="datetext">Asked on: <span class="date">December 22, 2021</span></h5>
					</div>
					<div class="title-container">
						<h2 class="quest-title">
							Is this statement, “i see him last night” can be understood as “I saw him last night”?
						</h2>
					</div>
				</div>
			</div>
			<div class="middle-container">
				<div class="actions-container">
					<button class="up-btn btn"><i class="fas fa-sort-up"></i></button>
					<h6 class="upvotes">132</h6>
					<button class="down-btn btn"><i class="fas fa-sort-down"></i></button>
				</div>
				<div class="quest-details-container">
					<p class="quest-details">
						In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english. I saw him last night (correct) I see him last night ...
					</p>
					<div class="tags-container">
						<div class="tag">mathematics</div>
					</div>
					<div class="bottom-container">
						<h6 class="answers"><i class="fas fa-book"></i>4 answers</h6>
						<h6 class="answers"><i class="fas fa-comment-dots"></i>8 comments</h6>
					</div>
				</div>
			</div>

		</div>
		<div class="question-container">
			<div class="top-container">
				<div class="profile-container">
					<img src="avatar1.png" alt="" class="full-img">
				</div>
				<div class="basic-container">
					<div class="mini-info-container">
						<h3 class="username">Martin Hope</h3>
						<div class="status-container flex-center">
							<h6 class="status">expert</h6>
						</div>
						<h5 class="datetext">Asked on: <span class="date">December 22, 2021</span></h5>
					</div>
					<div class="title-container">
						<h2 class="quest-title">
							Is this statement, “i see him last night” can be understood as “I saw him last night”?
						</h2>
					</div>
				</div>
			</div>
			<div class="middle-container">
				<div class="actions-container">
					<button class="up-btn btn"><i class="fas fa-sort-up"></i></button>
					<h6 class="upvotes">132</h6>
					<button class="down-btn btn"><i class="fas fa-sort-down"></i></button>
				</div>
				<div class="quest-details-container">
					<p class="quest-details">
						In my local language (Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english. I saw him last night (correct) I see him last night ...
					</p>
					<div class="tags-container">
						<div class="tag">mathematics</div>
					</div>
					<div class="bottom-container">
						<h6 class="answers"><i class="fas fa-book"></i>4 answers</h6>
						<h6 class="answers"><i class="fas fa-comment-dots"></i>8 comments</h6>
					</div>
				</div>
			</div>

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

	.full-img {
		width: 100%;
		height: 100%;
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
	.question-container {
		background-color: white;
		width: 100%;
		padding: 30px;
		margin-bottom: 2px;
		.top-container {
			display: flex;
			margin-bottom: 10px;
			.profile-container {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				border: 2px solid var(--bluish);
				padding: 5px;
				margin-right: 10px;
				overflow: hidden;
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
					}
					.status-container {
						padding: 3px 10px;
						background-color: blueviolet;
						margin-right: 10px;
						.status {
							color: white;
							font-size: 10px;
						}
					}
					.datetext {
						font-size: 12px;
						.date {
							color: var(--bluish);
						}
					}
				}
				.title-container {
					.quest-title {
						font-size: 20px;
						font-weight: 700;
						cursor: pointer;
						&:hover {
							color: var(--bluish);
						}
					}
				}
			}
		}

		.middle-container {
			display: flex;
			.actions-container {
				height: 100px;
				margin-right: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.btn {
					background-color: white;
					font-size: 25px;
					color: gray;
					margin: 0;
					&:hover {
						color: var(--bluish);
					}
				}
			}
			.quest-details-container {
				.quest-details {
					line-height: 1.8;
					font-size: 16px;
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
					}
				}
			}
		}
	}
</style>
