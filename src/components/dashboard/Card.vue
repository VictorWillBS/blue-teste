<script setup lang="ts">
    import Container from "../general/microComponents/Container.vue"
    import PayMoneyIcon from "../../../public/icons/PayMoney.vue"
</script>
<template lang="">
    <Container
        custom-class="p-3 shadow sm:max-w-2xs sm:w-full xs:w-4/5 w-full h-32  "
        :class="getBg()"
    >
        <div class="h-full max-h-1/2 text-white">
            <p class="text-xl font-bold">{{ value }}</p>
            <p class="text-xs font-light capitalize">{{ title }}</p>
        </div>
        <div class="flex w-full justify-end">
            <PayMoneyIcon size="61" />
        </div>
    </Container>
</template>
<script lang="ts">
    export default {
        props: {
            value: { type: String, default: "" },
            title: { type: String, default: "" },
            type: { type: String, default: "" },
        },
        methods: {
            getBg(): any {
                const types = {
                    proposes: "bg-black",
                    gain: "bg-neutral-500",
                }

                return types[this.type] || "bg-blue"
            },
        },
    }
</script>
<style lang=""></style>
