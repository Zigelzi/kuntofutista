<script lang="ts">
	export let type: string;
	export let name: string;
</script>

<label class="text-lg" for="email">
	<slot>Syötä otsikko</slot>
	<input class="block mt-2 text-zinc-950 p-1" {type} {name} id={name} />
</label>
