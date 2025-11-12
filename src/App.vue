<script setup lang="ts">
import HeaderBar from "@/components/layout/HeaderBar.vue";
</script>
<template>
      <HeaderBar />

  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  min-height: 100vh;
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
}

#app {
  padding-top: 68px; /* leave space for fixed header */
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden; /* horizontal scroll prevention */
}
</style>
