<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { createEventDispatcher } from 'svelte';

	export let type: string = 'button';
	export let align: 'left' | 'center' | 'right' = 'left';

	if (!$$props.kind || $$props.kind === 'primary') {
		$$props.style = 'background-color:var(--cds-interactive-01, #0f62fe);';
	}

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('Click');
	}
</script>

<div class="container" style="text-align: {align};">
	<Button {type} size="field" class="nivaButton" on:click={handleClick} {...$$props}>
		<slot />
	</Button>
</div>

<style>
	.container {
		width: 100%;
	}
</style>
