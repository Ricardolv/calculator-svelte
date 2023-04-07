<script lang="ts">
    export let label: string
    export let triple: boolean = false
    export let double: boolean = false
    export let operation: boolean = false
    export let emphasis: boolean = false
    export let onClick: (value: string) => void = () => {}
</script>

<button class="button" 
        on:click={() => onClick(label)}
        class:triple class:double class:operation class:emphasis>
    {label}
</button>


<style>
    .button {
        margin: 0;
        border: 1px solid var(--my-background-color);
        flex-basis: 25%;
    }

    .triple {
        flex-basis: 75%;
    }

    .double {
        flex-basis: 50%;
    }

    .operation {
        background-color: orange;
        color: white;
    }

    .emphasis {
        background-color: red;
        color: white;
    }

</style>