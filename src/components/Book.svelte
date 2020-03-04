<script>
    export let book
</script>

<article>
    <h3>{book.title}</h3>
    
    {#each book.formats as format}
        <p>{format}</p>
    {/each}

    {#if book.isbn}
        <p>{book.isbn}</p>
    {/if}
</article>

<style>

</style>