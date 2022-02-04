<script lang="ts">
	import { page } from "$app/stores";
	import { showLogin, showSignup } from "$lib/store.js";
	import { appUser, isLoggedIn } from "$lib/auth";
	import logo from "./svelte-logo.svg";
import type { User } from "$lib/utils";
	let isLogged = false;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	});
	let user:User;
	appUser.subscribe((value) => {
        user = value;
    });
	function showLoginForm() {
		showLogin.set(true);
		showSignup.set(false);
	}
	function showSignupForm() {
		showLogin.set(false);
		showSignup.set(true);
	}
	let mobileMenu = false;
	function toggleMenu() {
		mobileMenu = !mobileMenu;
	}
</script>

<header class="header">
	<nav class="navbar">
		<button class="menu-btn" on:click={toggleMenu}
			><i class="fas fa-bars" /></button
		>
		<div class="logo-container img-container">
			<img src="logo.png" alt="" class="full-img" />
		</div>
		<div class="half-nav">
			<ul class="navlist">
				<li>
					<a
						href="/"
						class="navlink"
						class:active={$page.url.pathname === "/"}>Home</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="navlink"
						class:active={$page.url.pathname === "/about"}>About Us</a
					>
				</li>
				<li>
					<a
						href="/contact"
						class="navlink"
						class:active={$page.url.pathname === "/contact"}>Contact Us</a
					>
				</li>
			</ul>
			<div class="search-container">
				<input
					type="search"
					name=""
					id=""
					placeholder="search for something"
					class="search-box"
				/>
				<i class="fas fa-search" />
			</div>

			{#if isLogged}
				<div class="actions-container">
					<button class="btn"><i class="fas fa-bell" /></button>
					<button class="btn"><i class="fas fa-mail-bulk" /></button>
					<a href="/profile" class="btn profile-btn"
						><i class="fas fa-user-circle" /></a
					>
				</div>
				<a href="/ask-question" class="auth-btn reg-btn"
					>Ask A Question</a
				>
			{:else}
				<button class="auth-btn login-btn" on:click={showLoginForm}
					>Sign in</button
				>
				<button class="auth-btn reg-btn" on:click={showSignupForm}
					>Sign up</button
				>
			{/if}
		</div>
	</nav>
</header>
{#if mobileMenu == true}
	<aside class="mobile-sidenav">
		<div class="sidelist-container">
			<ul class="sidelist">
				<button class="close-btn" on:click={toggleMenu}>X</button>
				<li>
					<a
						href="/"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/"}
						><i class="fas fa-home" />home</a
					>
				</li>
				<li>
					<a
						href="/posts"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/posts"}
						><i class="fas fa-rss-square" />Add post</a
					>
				</li>
				{#if isLogged}
					<li>
						<a
							href="/profile"
							class="sidelink"
							on:click={toggleMenu}
							class:active={$page.url.pathname === "/profile"}
							><i class="fas fa-id-badge" />user profile</a
						>
					</li>
				{/if}

				<li>
					<a
						href="/communities"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/communities"}
						><i class="fas fa-users" />communities</a
					>
				</li>
				<li>
					<a href="/" class="sidelink" on:click={toggleMenu}
						><i class="fas fa-question-circle" />questions</a
					>
				</li>
				<li>
					<a
						href="/badges"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/badges"}
						><i class="fas fa-medal" />badges</a
					>
				</li>
				<li>
					<a
						href="/leaderboard"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/leaderboard"}
						><i class="fas fa-clipboard-list" />leaderboard</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/about"}
						><i class="fas fa-clipboard-list" />about</a
					>
				</li>
				<li>
					<a
						href="/contact"
						class="sidelink"
						on:click={toggleMenu}
						class:active={$page.url.pathname === "/contact"}
						><i class="fas fa-clipboard-list" />contact</a
					>
				</li>
				<h4 class="beta-txt"><i class="fas fa-grin-beam-sweat"></i> currently in BETA....</h4>
			</ul>
		</div>
	</aside>
{/if}

<style lang="scss">
	@import "../../styles";
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
		padding: 0 10px;

		.menu-btn {
			background-color: transparent;
			font-size: 1.5rem;
			display: none;
			margin-right: 0px;
			@include mqx(650px) {
				display: inline-block;
			}
		}

		.logo-container {
			width: 60px;
			height: 50px;
			margin-left: 20px;
			overflow: hidden;
			@include mqx(650px) {
				// margin-left: -80px;
				display: none;
			}
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
			@include mqx(650px) {
				display: none;
			}
		}

		.search-container {
			margin-right: 10px;
			margin-left: 20px;
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
					border: 1px solid red;
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

		.question-btn,
		.auth-btn {
			padding: 5px 10px;
			border-radius: 5px;
			font-weight: 600;
			margin-right: 20px;
		}
		.reg-btn {
			background-color: #2d6ff7;
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

	.mobile-sidenav {
		position: fixed;
		top: 0;
		height: 100vh;
		width: 80%;
		background-color: white;
		z-index: 90;
		box-shadow: 0 5px 5px 2px gray;
		display: none;
		@include mqx(650px) {
			display: block;
		}
		.sidelist-container {
			margin-top: 20px;
			.sidelist {
				.close-btn {
					background-color: transparent;
					font-size: 1.5rem;
					margin-bottom: 20px;
				}
				li {
					margin-bottom: 18px;
				}
				.sidelink {
					color: rgb(48, 48, 48);
					font-weight: 600;
					text-transform: capitalize;
					i {
						margin-right: 10px;
						font-size: 20px;
						color: rgb(48, 48, 48);
					}
					&:hover {
						text-decoration: none;
						color: var(--bluish);
					}
				}
				.active {
					text-decoration: none;
					color: var(--bluish);
				}
			}
		}
	}
</style>
