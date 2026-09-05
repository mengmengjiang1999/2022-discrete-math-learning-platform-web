<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { api, getApiError } from '@/services/api'
import type { StudyRecord } from '@/services/types'

const records = ref<StudyRecord[]>([])
const loading = ref(true)
const errorMessage = ref('')

const completedCount = computed(
  () => records.value.filter((item) => item.problem_status === '✅').length,
)
const accuracy = computed(() => {
  if (!records.value.length) return 0
  return Math.round((completedCount.value / records.value.length) * 100)
})

function formatTime(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

async function loadRecords() {
  loading.value = true
  errorMessage.value = ''
  try {
    const { data } = await api.get<{ data: StudyRecord[] }>('/records')
    records.value = data.data
  } catch (error) {
    errorMessage.value = getApiError(error, '学习记录加载失败')
  } finally {
    loading.value = false
  }
}

onMounted(loadRecords)
</script>

<template>
  <div class="content-page page-width">
    <header class="page-heading records-heading">
      <div>
        <p class="eyebrow"><span></span> LEARNING LOG</p>
        <h1>每次推演，<br /><em>都有迹可循。</em></h1>
      </div>
      <div class="record-stats">
        <div>
          <strong>{{ records.length }}</strong
          ><span>题目记录</span>
        </div>
        <div>
          <strong>{{ completedCount }}</strong
          ><span>已答对</span>
        </div>
        <div>
          <strong>{{ accuracy }}%</strong><span>当前正确率</span>
        </div>
      </div>
    </header>

    <LoadingState v-if="loading" label="正在整理学习记录" />
    <ErrorState v-else-if="errorMessage" :message="errorMessage" @retry="loadRecords" />

    <section v-else-if="records.length" class="records-table-wrap">
      <table class="records-table">
        <thead>
          <tr>
            <th>编号</th>
            <th>题目</th>
            <th>最近练习</th>
            <th>结果</th>
            <th><span class="sr-only">操作</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in records" :key="record.id">
            <td>
              <span class="record-index">{{ String(record.id).padStart(2, '0') }}</span>
            </td>
            <td>
              <strong>{{ record.problem_type }}</strong
              ><small>{{ record.problem_id.slice(0, 10) }}</small>
            </td>
            <td>{{ formatTime(record.problem_time) }}</td>
            <td>
              <span
                class="status-pill"
                :class="
                  record.problem_status === '✅'
                    ? 'success'
                    : record.problem_status === '❌'
                      ? 'failed'
                      : 'pending'
                "
              >
                {{
                  record.problem_status === '✅'
                    ? '已答对'
                    : record.problem_status === '❌'
                      ? '待订正'
                      : '未完成'
                }}
              </span>
            </td>
            <td>
              <RouterLink
                :to="{ name: 'problem', query: { problem_id: record.problem_id } }"
                aria-label="查看题目"
                >↗</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else class="empty-state">
      <span>∅</span>
      <h2>还没有学习记录</h2>
      <p>完成第一道题后，你的练习轨迹会出现在这里。</p>
      <RouterLink class="button button--primary" :to="{ name: 'problems' }"
        >选择题目 <span>→</span></RouterLink
      >
    </section>
  </div>
</template>
