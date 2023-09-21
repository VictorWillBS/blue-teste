<template lang="">
    <Container class="h-full w-full shadow sm:container lg:me-4 lg:w-4/5">
        <section
            class="flex flex-wrap items-center justify-around gap-x-2 gap-y-4 px-4 py-8 md:px-6"
        >
            <Card />
            <Card
                type="gain"
                value="R$ 4.478,22"
                title="Em Lucro"
            />
            <Card
                type="proposes"
                value="145"
                title="Novas Propostas"
            />
        </section>
        <DashboardTable :proposals="proposalFactory(8)" />
    </Container>
</template>
<script lang="ts">
    import Card from "./Card.vue"
    import { defineComponent } from "vue"
    import DashboardTable from "./DashboardTable.vue"
    import proposalFactory from "../../utils/proposalFactory.ts"
    import Container from "../general/microComponents/Container.vue"

    export default defineComponent({
        components: {
            Container,
            Card,
            DashboardTable,
        },
        methods: { proposalFactory },
    })
</script>
<style lang=""></style>
