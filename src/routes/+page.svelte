<script>
  import Calculator from "$lib/Calculator.svelte";
</script>

<div class="main">
    <Calculator />
</div>

<style>
    :global(body) {
            background-color: black;
    }

    :root {
        --my-background-color: #555
    }

    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>