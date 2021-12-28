<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import Rightbar from '$lib/Rightbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<Sidebar />
	<div class="content">
		<slot />
	</div>
	<Rightbar />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #F2F2F2;
	}

	.content {
		width: 64%;
	}

	
</style>
