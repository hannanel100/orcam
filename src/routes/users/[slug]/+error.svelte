<script>
	import { page } from '$app/stores';
	$: console.log($page.status);
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
