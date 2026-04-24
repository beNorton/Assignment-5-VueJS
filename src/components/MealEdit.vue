<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <nav class="mb-3">
      <RouterLink
        :to="`/meals/${route.params.id}`"
        class="text-decoration-none"
      >
        &larr; Back to details
      </RouterLink>
    </nav>
    <h1 class="h2">Edit meal</h1>
    <p class="text-body-secondary">
      Editing meal ID: <code>{{ route.params.id }}</code>
    </p>
    <p>Form and save logic can go here later.</p>
  </div>
</template>
