<script lang="ts">
	import ls from '$lib/stores/localStore';

	import NivaInput from '../ui/input/NivaInput.svelte';
	import NivaButton from '../ui/button/NivaButton.svelte';
	import NivaDivider from '../ui/divider/NivaDivider.svelte';
	import NivaTitle from '../ui/title/NivaTitle.svelte';

	export let view: String;

	const handleClick = () => {
		view = 'signup';
	};
</script>

<div class="h-screen w-1/4 bg-white fixed p-5 opacity-90">
	<NivaTitle text={ls.auth.login} />

	<NivaInput labelText={ls.auth.email} />

	<NivaInput labelText={ls.auth.password} type="password" />

	<NivaButton>{ls.auth.login}</NivaButton>

	<NivaDivider text={ls.auth.or} />

	<NivaButton align="center" kind="ghost" on:Click={handleClick}>{ls.auth.doRegister}</NivaButton>
</div>
