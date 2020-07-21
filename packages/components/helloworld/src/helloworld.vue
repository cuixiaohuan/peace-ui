<template>
    <div class="hello-world">
        this is my first component.
    </div>
</template>

<script>
export default {
    name: "hello-world",
    props: {
        type: String
    }
}
</script>

<style scoped>
.hello-world {
    color: blueviolet;
    font-size: 30px;
}
</style>
