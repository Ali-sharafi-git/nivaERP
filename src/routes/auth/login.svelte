<script lang="ts">
	import '../../app.css';
	import Login from '$lib/components/login/Login.svelte';

	export let imageUrl = '';
</script>

<Login {imageUrl} />
