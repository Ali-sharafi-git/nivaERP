<script>
	import NivaInput from '../ui/input/NivaInput.svelte';
	import NivaButton from '../ui/button/NivaButton.svelte';

	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import FaKey from 'svelte-icons/fa/FaKey.svelte';
</script>

<div class="h-screen w-1/4 bg-white fixed p-5 opacity-90">
	<NivaInput label="ایمیل" size="xs" cssClass="my-5" icon={FaUser} />
	<NivaInput label="کلمه عبور" type="password" size="xs" cssClass="my-5" icon={FaKey} />

	<NivaButton>ورود</NivaButton>
</div>
