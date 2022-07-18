<script lang="ts">
	import { TextInput } from '@svelteuidev/core';

	export let cssClass: string;
</script>

<div class="container">
	<TextInput size="xs" class={`txtIcon ${cssClass}`} {...$$props} />
</div>

<style>
	.container {
		direction: ltr;
	}
</style>
