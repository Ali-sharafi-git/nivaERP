<script lang="ts">
	import BG from './BgImage.svelte';
	import Pane from './Login.svelte';

	export let imageUrl: string;
</script>

<BG {imageUrl}>
	<Pane>RRRRRRRRRRR +++++++</Pane>
</BG>
