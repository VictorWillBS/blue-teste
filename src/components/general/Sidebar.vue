<script setup lang="ts">
    import { onMounted } from "vue"
    import ViewDashboard from "vue-material-design-icons/ViewDashboard.vue"
    import MoneyBagIcon from "../../../public/icons/MoneyBag.vue"

    const emit = defineEmits(["updateSidebarVisibility"])
    onMounted(function () {
        window.addEventListener("resize", function () {
            emit("updateSidebarVisibility", screen.width >= 1024)
        })
    })
</script>
<template>
    <aside
        class="absolute left-0 top-0 z-10 flex h-full min-h-screen w-full lg:w-fit"
        :class="mobileSidebarOpen ? '' : 'hidden'"
    >
        <section class="h-full w-40 flex-none bg-white p-3 shadow lg:block">
            <article
                class="mb-20 flex w-full items-center justify-center"
                @click="hideMobile()"
            >
                <img
                    src="../../assets/blue-logo.svg"
                    class="w-25 h-8"
                />
            </article>
            <section class="flex items-center justify-center">
                <ul class="">
                    <a class="mb-4 flex w-full items-center justify-start">
                        <ViewDashboard
                            :size="30"
                            class="me-3"
                        />
                        <span class="text-sm font-bold">Dashboard</span>
                    </a>
                    <a
                        class="mb-4 flex w-full items-center justify-start text-gray-500"
                    >
                        <TableIcon
                            :size="30"
                            class="me-3"
                        />
                        <span class="text-sm font-bold">Vendas</span>
                    </a>
                    <a
                        class="mb-4 flex w-full items-center justify-start text-gray-500"
                    >
                        <MoneyBagIcon
                            :size="30"
                            class="me-3"
                        />
                        <span class="text-sm font-bold">Planos</span>
                    </a>
                </ul>
            </section>
        </section>
        <div
            class="w-full bg-black bg-opacity-5 lg:hidden"
            @click="hideMobile()"
        ></div>
    </aside>
</template>
<script lang="ts">
    import Table from "vue-material-design-icons/Table.vue"

    export default {
        props: ["mobileSidebarOpen"],
        components: { TableIcon: Table },
        methods: {
            hideMobile() {
                console.log(this.mobileSidebarOpen)
                this.$emit("updateSidebarVisibility", false)
                console.log(this.mobileSidebarOpen)

                return
            },
        },
    }
</script>
<style lang="css">
    .icon {
        fill: #6b7280;
    }
</style>
