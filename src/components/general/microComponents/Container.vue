<template lang="">
    <div
        class="rounded shadow"
        :class="customClass"
    >
        <slot> </slot>
    </div>
</template>
<script lang="ts">
    export default {
        props: {
            customClass: {
                type: String,
                default() {
                    return "bg-white"
                },
            },
        },
    }
</script>
<style lang=""></style>
