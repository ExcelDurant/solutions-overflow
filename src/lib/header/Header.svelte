<script lang="ts">
	import { page } from '$app/stores';
	import { showLogin, showSignup } from "$lib/store.js";
	import { isLoggedIn } from "$lib/auth";
	import logo from './svelte-logo.svg';
	let isLogged = false;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	})
	function showLoginForm() {
		showLogin.set(true);
		showSignup.set(false);
	}
	function showSignupForm() {
		showLogin.set(false);
		showSignup.set(true);
	}
</script>

<header class="header">
	<nav class="navbar">
		<div class="logo-container img-container">
			<img src="logo.png" alt="" class="full-img">
		</div>
		<div class="half-nav">
			<ul class="navlist">
				<li><a href="/" class="navlink" class:active={$page.path === '/'}>Home</a></li>
				<li><a href="/about" class="navlink" class:active={$page.path === '/about'}>About Us</a></li>
				<li><a href="/" class="navlink" class:active={$page.path === '/contact'}>Contact Us</a></li>
			</ul>
			<div class="search-container">
				<input type="search" name="" id="" placeholder="search for something" class="search-box">
				<i class="fas fa-search"></i>
			</div>
			<div class="actions-container">
				<button class="btn"><i class="fas fa-bell"></i></button>
				<button class="btn"><i class="fas fa-mail-bulk"></i></button>
				<button class="btn profile-btn"><i class="fas fa-user-circle"></i></button>
			</div>
			{#if isLogged}
			<a href="/ask-question" class="auth-btn reg-btn">Ask A Question</a>
			{:else}
			<button class="auth-btn login-btn" on:click={showLoginForm}>Sign in</button>
			<button class="auth-btn reg-btn" on:click={showSignupForm}>Sign up</button>
			{/if}
			
		</div>

	</nav>
</header>

<style lang="scss">
	
	@import '../../styles';
	.header {
		width: 100%;
		height: 80px;
		border-bottom: 1px solid rgb(196, 196, 196);
	}

	.navbar {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo-container {
			width: 60px;
			height: 50px;
			margin-left: 20px;
			overflow: hidden;
		}

		.half-nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
		}

		.navlist {
			margin: 0;
			margin-right: 20px;
			display: flex;
			.navlink {
				color: black;
				padding: 5px 10px;
				margin-right: 10px;
				font-weight: 600;
				&:hover {
					text-decoration: none;
					background-color: black;
					color: white;
				}
			}
			.active {
				text-decoration: none;
					background-color: black;
					color: white;
			}
		}

		.search-container {
			margin-right: 10px;
			position: relative;
			display: flex;
			@include mqx(1000px) {
            display: none;
        }
			
			.search-box {
				height: 30px;
				width: 100%;
				background-color: #f1f1f1;
				padding: 5px 10px;
				&:focus {
					border:1px solid red;
				}
			}
			i {
				position: absolute;
				top: 20%;
				right: 5%;
				color: gray;
			}
		}

		.actions-container {
			margin-right: 10px;
			i {
				color: gray;
				font-size: 20px;
			}
			.profile-btn {
				i {
					font-size: 28px;
				}
			}
		}

		.question-btn, .auth-btn {
			padding: 5px 10px;
			border-radius: 5px;
			font-weight: 600;
			margin-right: 20px;
		}
		.reg-btn {
			background-color: #2D6FF7;
			color: white;
			&:hover {
				background-color: black;
			}
		}
		.login-btn {
			color: gray;
			background-color: white;
			&:hover {
				background-color: var(--redish);
				color: white;
			}
		}
	}
</style>
