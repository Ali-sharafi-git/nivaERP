<script>
	import { TextInput } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';
</script>

<div class="h-screen w-1/4 bg-white fixed opacity-90">
	<TextInput label="Your email" placeholder="Your email" icon={EnvelopeClosed} />
</div>
