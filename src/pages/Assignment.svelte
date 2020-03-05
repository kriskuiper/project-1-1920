<script>
    import {
        assignmentTitle,
        assignmentDescription,
        assignmentBooks
    } from '../store'

    import Book from '../components/Book.svelte'
</script>

<main>
    <h1>{$assignmentTitle}</h1>
    <p>{$assignmentDescription}</p>
    <div class="book-list">
        {#each $assignmentBooks as book}
            <Book book={book} />
        {/each}
    </div>
</main>

<style>
    .book-list {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    }
</style>