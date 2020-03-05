<script>
    import { Link } from 'svelte-routing'
</script>

<nav>
    <Link to="werkstuk">Mijn werkstuk</Link>
    <Link to="/">Opnieuw</Link>
</nav>

<style>
    nav {
        display: flex;
        align-items: flex-end;
        padding: 1rem 0;
    }
</style>