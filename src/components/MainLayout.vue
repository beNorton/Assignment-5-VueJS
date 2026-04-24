<script setup lang="ts">
import AppHeader from './AppHeader.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main class="container mt-4">
      <RouterView />
    </main>
  </div>
</template>