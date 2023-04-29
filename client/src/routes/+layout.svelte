<script lang="ts">
	import '$lib/styles/app.css';
</script>

<head>
	<title>Kuntofutista</title>
</head>
<header class="bg-zinc-900">
	<nav>
		<ul class="flex gap-4 justify-between mx-4">
			<div>
				<li class="p-4 font-bold text-2xl"><a href="/">Kuntofutista</a></li>
			</div>
			<div class="flex gap-4">
				<li class="p-4 font-bold"><a href="/login">Kirjaudu</a></li>
				<li class="p-4 font-bold"><a href="/register">Luo tili</a></li>
			</div>
		</ul>
	</nav>
</header>
<main class="bg-zinc-900 min-h-screen px-4">
	<slot />
</main>
