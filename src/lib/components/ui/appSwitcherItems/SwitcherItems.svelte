<script>
	import InventoryManagement from 'carbon-icons-svelte/lib/InventoryManagement.svelte';
	import TagImport from 'carbon-icons-svelte/lib/TagImport.svelte';
	import TagExport from 'carbon-icons-svelte/lib/TagExport.svelte';
	import Purchase from 'carbon-icons-svelte/lib/Purchase.svelte';
	import ls from '$lib/stores/localStore';
	import { Column, Grid, Row, HeaderPanelLink } from 'carbon-components-svelte';
</script>

<HeaderPanelLink href="/purchase" class="my-5">
	<Grid noGutter>
		<Row>
			<Column sm={1}>
				<TagImport size={32} />
			</Column>
			<Column>
				{ls.general.purchase}
			</Column>
		</Row>
	</Grid>
</HeaderPanelLink>

<HeaderPanelLink href="/inventory" class="my-5">
	<Grid noGutter>
		<Row>
			<Column sm={1}>
				<InventoryManagement size={32} />
			</Column>
			<Column>
				{ls.general.inventory}
			</Column>
		</Row>
	</Grid>
</HeaderPanelLink>

<HeaderPanelLink href="/sales" class="my-5">
	<Grid noGutter>
		<Row>
			<Column sm={1}>
				<TagExport size={32} />
			</Column>
			<Column>
				{ls.general.sales}
			</Column>
		</Row>
	</Grid>
</HeaderPanelLink>

<HeaderPanelLink href="/payment" class="my-5">
	<Grid noGutter>
		<Row>
			<Column sm={1}>
				<Purchase size={32} />
			</Column>
			<Column>
				{ls.general.payment}
			</Column>
		</Row>
	</Grid>
</HeaderPanelLink>
