<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<div>
	<form action="" class="mx-auto max-w-lg bg-zinc-600 p-6 rounded-lg">
		<h1 class="text-2xl mb-8">Kirjaudu sisään</h1>
		<fieldset class="flex flex-col gap-4">
			<Input type="email" name="email">Sähköposti</Input>
			<Input type="password" name="password">Salasana</Input>
			<button
				class="mt-8 bg-zinc-950 border-zinc-950 border-2 p-4 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
				type="submit">Kirjaudu</button
			>
		</fieldset>
	</form>
</div>
