<script lang="ts">
	export let data;
	const teams = data.teams;
</script>

<main class="bg-zinc-900 min-h-screen">
	<section class="container pt-8">
		<h1 class="text-4xl mb-2">Kuntofutista</h1>
		<p>Löydä lähin kuntofutis ja aloita jalkapallon pelaaminen hyvässä seurassa!</p>
		<div class="my-8">
			{#each teams as team}
				<div class="bg-zinc-700 p-4">
					<div class="pb-4">
						<h2 class="text-lg font-bold">{team.teamName}</h2>
						<p class="text-zinc-400">{team.clubName}</p>
						<p>{team.location}</p>
						<p>3 km kentälle</p>
					</div>
					<button class="bg-zinc-800 py-2 px-4 rounded hover:bg-zinc-100 hover:text-zinc-800"
						>Lue lisää</button
					>
				</div>
			{/each}
		</div>
	</section>
</main>
