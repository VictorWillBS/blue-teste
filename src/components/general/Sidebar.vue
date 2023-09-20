<template >
  <aside class="bg-white h-full p-3 w-40 flex-none max-md:hidden shadow">
    <article class="flex justify-center items-center w-full mb-20">
      <img src="../../assets/blue-logo.svg"
           class="w-25 h-8">
    </article>
    <section class="flex justify-center items-center">
      <ul class="">
        <a class="flex justify-start items-center w-full mb-4 ">
          <ViewDashboard size="30"
                         class="me-3" />
          <span class="text-sm font-bold">Dashboard</span>
        </a>
        <a class="flex justify-start items-center w-full text-gray-500 mb-4">
          <Table size="30"
                 class="me-3" />
          <span class="text-sm font-bold">Vendas</span>
        </a>
        <a class="flex justify-start items-center w-full text-gray-500 mb-4">

          <MoneyBagIcon size="30"
                        class="me-3" />
          <span class="text-sm font-bold">Planos</span>
        </a>
      </ul>
    </section>
  </aside>
</template>
<script lang="ts">
import ViewDashboard from 'vue-material-design-icons/ViewDashboard.vue';
import Table from 'vue-material-design-icons/Table.vue';
import MoneyBagIcon from "../../assets/icons/Money_bag.vue"
export default {
  components: {
    ViewDashboard, Table, MoneyBagIcon
  }
};
</script>
<style lang="css">
.icon {
  fill: #6b7280;
}
</style>