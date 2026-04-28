<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rank?: number
    max?: number
    ariaPrefix?: string
  }>(),
  {
    rank: 0,
    max: 5,
    ariaPrefix: 'Set health rank to',
  },
)

const emit = defineEmits<{
  rate: [rank: number]
}>()

// Changes to the rank are handle at the parent level and not here.
function onRate(rank: number) {
  emit('rate', rank)
}
</script>

<template>
  <div class="health-rank d-flex align-items-center gap-1">
    <button
      v-for="donut in max"
      :key="donut"
      type="button"
      class="donut-button p-0 border-0 bg-transparent"
      :class="{ active: donut <= rank }"
      :aria-label="`${ariaPrefix} ${donut}`"
      @click="onRate(donut)"
    >
      <img src="/donut.png" alt="" class="donut-icon" />
    </button>
    <span class="small text-body-secondary ms-1">{{ rank }}/{{ max }}</span>
  </div>
</template>

<style scoped>
.donut-button {
  cursor: pointer;
}

.donut-icon {
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.25;
  transition: opacity 120ms ease-in-out;
}

.donut-button.active .donut-icon {
  opacity: 1;
}
</style>
