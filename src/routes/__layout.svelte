<script context="module">
	export async function load() {
		return {
			status: 301,
			redirect: '/auth/login'
		};
	}
</script>

<script lang="ts">
	import AppSwitcherItems from '$lib/components/ui/appSwitcherItems/SwitcherItems.svelte';
	import ls from '$lib/stores/localStore';
	import { sideMenuStore } from '$lib/stores/sideMenuStore';
	import type { MenuItem } from '$lib/types/general/sideMenu';
	import 'carbon-components-svelte/css/all.css';
	import '../app.css';

	import {
		Column,
		Content,
		Grid,
		Header,
		HeaderAction,
		HeaderPanelLinks,
		HeaderUtilities,
		Row,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
	let isOpen = false;

	let menuItems: MenuItem[];
	$: menuItems = $sideMenuStore;
</script>

<Header company={ls.general.appName} bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderAction bind:isOpen>
			<HeaderPanelLinks>
				<AppSwitcherItems />
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>

	<SideNav style={'right:0px'} bind:isOpen={isSideNavOpen} fixed rail>
		<SideNavItems>
			{#each menuItems as item}
				<SideNavLink class="navLink" href={item.href} text={item.label} icon={item.icon} />
			{/each}
		</SideNavItems>
	</SideNav>
</Header>

<Content>
	<Grid>
		<Row>
			<Column>
				<slot />
			</Column>
		</Row>
	</Grid>
</Content>
