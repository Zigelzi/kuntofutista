<script lang="ts">
	export let data;
	const teams = data.teams;
</script>

<section class="container pt-8">
	<h1 class="text-4xl mb-2">Kuntofutista</h1>
	<p>Löydä lähin kuntofutis ja aloita jalkapallon pelaaminen hyvässä seurassa!</p>
	<div class="my-8">
		{#each teams as team}
			<div class="bg-zinc-700 p-4">
				<div class="mb-4">
					<h2 class="text-lg font-bold">{team.clubName} - {team.teamName}</h2>
					<p>{team.location}</p>
					<p>3 km kentälle</p>
				</div>
				<div class="mb-4">
					<h2>Treenit</h2>
					{#each team.practises as practise}
						<p>{practise.weekday}, {practise.startTime} - {practise.endTime}</p>
					{/each}
				</div>
				<button class="bg-zinc-800 py-2 px-4 rounded hover:bg-zinc-100 hover:text-zinc-800"
					>Lue lisää</button
				>
			</div>
		{/each}
	</div>
</section>
