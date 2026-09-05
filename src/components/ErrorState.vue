<script setup lang="ts">
withDefaults(defineProps<{ message: string; retryLabel?: string }>(), { retryLabel: '重新加载' })

defineEmits<{ retry: [] }>()
</script>

<template>
  <div class="state-card state-card--error" role="alert">
    <span class="state-icon" aria-hidden="true">!</span>
    <div>
      <strong>暂时无法完成请求</strong>
      <p>{{ message }}</p>
    </div>
    <button class="button button--quiet" type="button" @click="$emit('retry')">
      {{ retryLabel }}
    </button>
  </div>
</template>
