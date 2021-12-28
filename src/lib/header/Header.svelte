<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
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
			<button class="question-btn btn">ask a question</button>
		</div>

	</nav>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		TODO put something else here? github link?
	</div> -->
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

		.question-btn {
			padding: 5px 5px;
			background-color: #2D6FF7;
			color: white;
			font-weight: 600;
			margin-right: 20px;
		}
	}
</style>
