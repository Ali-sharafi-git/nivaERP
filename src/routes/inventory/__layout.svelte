<script lang="ts">
	import { sideMenuStore } from '$lib/stores/sideMenuStore';
	import { menuItems } from './menuItems';

	sideMenuStore.set(menuItems);
</script>

<slot />
