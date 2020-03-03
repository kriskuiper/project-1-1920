<script>
    export let book
</script>

<article>
    <h3>{book.title}</h3>
    
    {#each book.formats as format}
        <p>{format}</p>
    {/each}

    <p>{book.isbn}</p>
</article>

<style>

</style>