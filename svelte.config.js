// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
import netlify from '@sveltejs/adapter-netlify';
// import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// adapter: adapter({
		// 	// if true, will split your app into multiple functions
		// 	// instead of creating a single one for the entire app
		// 	split: true
		// }),
		// adapter: vercel(),
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		// vite: {
		// 	// ssr: {
		// 	// 	external: ['@xstate/svelte']
		// 	//   }
		// 	server: {
		// 		proxy: {

		// 		}
		// 	}
		//    }
	}
};

export default config;
