<script setup lang="ts">
import Dashboard from './pages/Dashboard.vue';
import Sidebar from './components/general/Sidebar.vue';
import MainContainer from './components/general/MainContainer.vue';
</script>


<template>
  <div class="bg-white-blue font-text-normal h-screen w-screen flex">
    <Sidebar />
    <MainContainer>
      <Dashboard />
    </MainContainer>
  </div>
</template>

<style scoped></style>
