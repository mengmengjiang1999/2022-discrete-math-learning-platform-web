<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: '正在加载' })
</script>

<template>
  <div class="state-card" role="status">
    <span class="loader" aria-hidden="true"></span>
    <p>{{ label }}</p>
  </div>
</template>
