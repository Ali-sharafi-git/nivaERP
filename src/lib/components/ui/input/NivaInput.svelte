<script lang="ts">
	import { TextInput } from 'carbon-components-svelte';

	export let cssClass: string = '';
</script>

<TextInput size="sm" class={`mb-5 ${cssClass}`} {...$$props} />
