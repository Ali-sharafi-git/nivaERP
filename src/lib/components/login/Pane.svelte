<script lang="ts">
	import BG from './BgImage.svelte';
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';

	export let imageUrl: string;
	let view: string = 'login';
</script>

<BG {imageUrl}>
	{#if view === 'login'}
		<Login bind:view />
	{:else}
		<Signup bind:view />
	{/if}
</BG>
