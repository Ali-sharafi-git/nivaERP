<script>
	import 'carbon-components-svelte/css/all.css';
	import '../app.css';

	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column,
		HeaderUtilities,
		HeaderPanelLinks,
		HeaderPanelLink,
		HeaderPanelDivider,
		HeaderAction
	} from 'carbon-components-svelte';
	import Fade from 'carbon-icons-svelte/lib/Fade.svelte';

	let isSideNavOpen = false;
	let isOpen = false;
</script>

<Header company="نیوا" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderAction bind:isOpen>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 5</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>

	<SideNav style={'right:0px'} bind:isOpen={isSideNavOpen} fixed rail>
		<SideNavItems>
			<SideNavLink class="navLink" text="تعریف کالا" icon={Fade} />
			<SideNavLink class="navLink" text="ورود به انبار" icon={Fade} />
			<SideNavLink class="navLink" text="خروج از انبار" icon={Fade} />
			<!-- <SideNavMenu text="Menu">
				<SideNavMenuItem href="/" text="Link 1" />
				<SideNavMenuItem href="/" text="Link 2" />
				<SideNavMenuItem href="/" text="Link 3" />
			</SideNavMenu> -->
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
