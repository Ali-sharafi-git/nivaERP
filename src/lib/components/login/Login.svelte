<script lang="ts">
	import BG from './BgImage.svelte';
	import Pane from './Pane.svelte';

	export let imageUrl: string;
</script>

<BG {imageUrl}>
	<Pane>RRRRRRRRRRR +++++++</Pane>
</BG>
