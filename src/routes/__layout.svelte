<script context="module">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { browser } from "$app/env";
	import { isLoggedIn } from "$lib/auth.js";

	let currentRoute = "";
	if (browser && currentRoute === "/profile") {
		isLoggedIn.set(JSON.parse(sessionStorage.getItem('isLoggedIn') || 'false'));
		page.subscribe((value) => {
			currentRoute = value.path;
		});
		if (JSON.parse(sessionStorage.getItem("isLoggedIn")) != true) {
			goto("/");
		}
	}
</script>

<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Sidebar from "$lib/Sidebar.svelte";
	import Rightbar from "$lib/Rightbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import SignupForm from "$lib/SignupForm.svelte";
	import LoginForm from "$lib/LoginForm.svelte";
	import { showLogin, showSignup } from "$lib/store.js";
	import "../app.css";
	let login = false;
	let signup = false;
	showLogin.subscribe((value) => {
		login = value;
	});
	showSignup.subscribe((value) => {
		signup = value;
	});
</script>

<Header />

<main>
	{#if signup}
		<SignupForm />
	{/if}

	{#if login}
		<LoginForm />
	{/if}

	<Sidebar />
	<div class="content">
		<slot />
	</div>
	<Rightbar />
</main>

<Footer />

<style lang="scss">
	@import "../styles.scss";
	main {
		flex: 1;
		display: flex;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #f2f2f2;
		position: relative;
		@include mqx(900px) {
			flex-direction: column;
		}
	}

	.content {
		width: 64%;
		@include mqx(1200px) {
			width: 82%;
		}
		@include mqx(900px) {
			width: 98%;
			margin: 0 auto;
		}
	}
</style>
