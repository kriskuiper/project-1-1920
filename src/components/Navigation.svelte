<script>
    import { Link } from 'svelte-routing'
</script>

<nav>
    <Link to="werkstuk" class="button">Mijn werkstuk</Link>
    <Link to="/" class="button">Opnieuw</Link>
</nav>

<style>
    nav {
        display: flex;
        align-items: flex-end;
        padding: 1rem 0;
    }
</style>