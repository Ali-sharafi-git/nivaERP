<script>
	import ls from '$lib/stores/localStore';

	import NivaInput from '../ui/input/NivaInput.svelte';
	import NivaButton from '../ui/button/NivaButton.svelte';
	import { Stack } from '@svelteuidev/core';
	import { Divider } from '@svelteuidev/core';

	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import FaKey from 'svelte-icons/fa/FaKey.svelte';
</script>

<div class="h-screen w-1/4 bg-white fixed p-5 opacity-90">
	<NivaInput label={ls.auth.email} size="xs" cssClass="my-5" icon={FaUser} />
	<NivaInput label={ls.auth.password} type="password" size="xs" cssClass="my-5" icon={FaKey} />

	<Stack class="my-10" justify="flex-end">
		<NivaButton>{ls.auth.login}</NivaButton>
	</Stack>

	<Divider label={ls.auth.or} labelPosition="center" />
</div>
