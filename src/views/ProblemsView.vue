<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { api, getApiError } from '@/services/api'
import type { AlgorithmSummary } from '@/services/types'

const problems = ref<AlgorithmSummary[]>([])
const loading = ref(true)
const errorMessage = ref('')

const topicMeta: Record<
  string,
  { index: string; label: string; description: string; accent: string }
> = {
  shortestpath: {
    index: '01',
    label: 'GRAPH / PATH',
    description: '在带权图中找到从源点到其余节点的最短距离。',
    accent: 'blue',
  },
  tsp: {
    index: '02',
    label: 'OPTIMIZATION',
    description: '寻找访问所有城市并回到起点的最短闭合路线。',
    accent: 'violet',
  },
  spantree: {
    index: '03',
    label: 'GRAPH / TREE',
    description: '计算连通图中包含全部顶点的支撑树数量。',
    accent: 'green',
  },
  roottree: {
    index: '04',
    label: 'COMBINATORICS',
    description: '理解有根树结构，并完成对应的计数问题。',
    accent: 'amber',
  },
}

async function loadProblems() {
  loading.value = true
  errorMessage.value = ''
  try {
    const { data } = await api.get<{ algorithms: AlgorithmSummary[] }>('/problemlist')
    problems.value = data.algorithms
  } catch (error) {
    errorMessage.value = getApiError(error, '题目列表加载失败')
  } finally {
    loading.value = false
  }
}

onMounted(loadProblems)
</script>

<template>
  <div class="content-page page-width">
    <header class="page-heading">
      <div>
        <p class="eyebrow"><span></span> PROBLEM SET</p>
        <h1>选择一个主题，<br /><em>开始推演。</em></h1>
      </div>
      <p>每个主题会保留尚未完成的题目。答对后再次进入，即可获得一道新的随机题目。</p>
    </header>

    <LoadingState v-if="loading" label="正在获取题目列表" />
    <ErrorState v-else-if="errorMessage" :message="errorMessage" @retry="loadProblems" />

    <section v-else class="problem-grid" aria-label="题目列表">
      <article
        v-for="problem in problems"
        :key="problem.id"
        class="problem-card"
        :class="`tone-${topicMeta[problem.problem_type]?.accent || 'blue'}`"
      >
        <div class="problem-card-top">
          <span>{{ topicMeta[problem.problem_type]?.index || problem.id }}</span>
          <span>{{ topicMeta[problem.problem_type]?.label || 'ALGORITHM' }}</span>
        </div>
        <div class="problem-glyph" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        <div class="problem-copy">
          <p>{{ problem.id }}</p>
          <h2>{{ problem.problem_name }}</h2>
          <p>{{ topicMeta[problem.problem_type]?.description }}</p>
        </div>
        <RouterLink
          class="problem-enter"
          :to="{ name: 'problem', query: { problem_type: problem.problem_type } }"
        >
          开始练习 <span aria-hidden="true">↗</span>
        </RouterLink>
      </article>
    </section>
  </div>
</template>
