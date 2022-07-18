<script lang="ts">
	import { Button } from '@svelteuidev/core';

	export let type: string = 'button';
</script>

<Button
	{type}
	variant="gradient"
	gradient={{ from: 'teal', to: 'green', deg: 105 }}
	ripple
	class="niva-button"
	{...$$props}
>
	<slot />
</Button>
