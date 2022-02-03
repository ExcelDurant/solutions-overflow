<script context="module">
	import { goto } from "$app/navigation";
	import { page, navigating} from "$app/stores";
	import { browser } from "$app/env";
	import { isLoggedIn } from "$lib/auth";
</script>

<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Sidebar from "$lib/Sidebar.svelte";
	import Rightbar from "$lib/Rightbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import SignupForm from "$lib/SignupForm.svelte";
	import LoginForm from "$lib/LoginForm.svelte";
	import { showFailure, showLogin, showSignup, showSuccess } from "$lib/store.js";
	import "../app.css";
import SuccessPopup from "$lib/SuccessPopup.svelte";
import FailurePopup from "$lib/FailurePopup.svelte";
import BasicSpinner from "$lib/BasicSpinner.svelte";
import PageLoader from "$lib/PageLoader.svelte";
	let currentRoute = "";
	if (browser) {
		isLoggedIn.set(JSON.parse(sessionStorage.getItem('isLoggedIn') || 'false'));
		page.subscribe((value) => {
			currentRoute = value.path;
			if(currentRoute === "/profile" && JSON.parse(sessionStorage.getItem("isLoggedIn")) != true) {
				goto("/");
			}
		});
	}
	let login = false;
	let signup = false;
	let success = false;
	let failure = false;
	showLogin.subscribe((value) => {
		login = value;
	});
	showSignup.subscribe((value) => {
		signup = value;
	});
	showSuccess.subscribe((value) => {
		success = value;
	})
	showFailure.subscribe((value) => {
		failure = value;
	})
</script>

<Header />

<main>
	{#if signup}
		<SignupForm />
	{/if}

	{#if login}
		<LoginForm />
	{/if}
	{#if success}
	<SuccessPopup />
	{/if}
	{#if failure}
	<FailurePopup />
	{/if}
	
	<Sidebar />
	<div class="content">
		<!-- {#if $navigating}
			<BasicSpinner />
		{/if} -->
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
