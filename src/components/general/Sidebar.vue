<script setup lang="ts">
    import { onMounted } from "vue"
    const emit = defineEmits(["updateSidebarVisibility"])
    onMounted(function () {
        window.addEventListener("resize", function () {
            emit("updateSidebarVisibility", screen.width >= 1024)
        })
    })
</script>
<template>
    <aside
        class="fixed left-0 top-0 z-10 flex h-full min-h-screen w-full lg:w-fit"
        :class="mobileSidebarOpen ? '' : 'hidden'"
        tabindex="0"
    >
        <section
            class="flex h-full w-40 flex-col justify-between bg-white p-3 shadow"
        >
            <div>
                <article class="mb-20 flex w-full items-center justify-center">
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
            </div>
            <button class="mb-10 flex items-center justify-start gap-x-4">
                <ion-icon
                    name="exit"
                    size="large"
                    class="icon-exit"
                />
                <p class="pt-0.5 text-sm font-bold">Sair</p>
            </button>
        </section>
        <div
            class="w-full bg-black bg-opacity-30 lg:hidden"
            @click="hideMobile()"
        ></div>
    </aside>
</template>
<script lang="ts">
    import Table from "vue-material-design-icons/Table.vue"
    import ViewDashboardIcon from "vue-material-design-icons/ViewDashboard.vue"
    import MoneyBagIcon from "../../../public/icons/MoneyBag.vue"
    import { defineComponent } from "vue"
    export default defineComponent({
        components: {
            TableIcon: Table as any,
            ViewDashboard: ViewDashboardIcon as any,
            MoneyBagIcon,
        },
        props: {
            mobileSidebarOpen: {
                type: Boolean,
                default() {
                    return screen.width >= 1024
                },
            },
        },
        methods: {
            hideMobile() {
                this.$emit("updateSidebarVisibility", false)
                return
            },
        },
    })
</script>
<style lang="css">
    .icon-exit {
        fill: #ff1717;
    }
</style>
