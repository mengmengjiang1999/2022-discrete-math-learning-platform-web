<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { api, apiAssetUrl, getApiError } from '@/services/api'
import type { AlgorithmType, ProblemResponse, SubmissionResponse } from '@/services/types'

const route = useRoute()
const problem = ref<ProblemResponse>()
const answer = ref('')
const loading = ref(true)
const submitting = ref(false)
const errorMessage = ref('')
const result = ref<'correct' | 'wrong' | undefined>()

const typeNames: Record<AlgorithmType, string> = {
  shortestpath: '单源最短路',
  tsp: '旅行商问题',
  spantree: '支撑树计数',
  roottree: '根树计数',
}

const problemTitle = computed(() => {
  const type = route.query.problem_type
  return typeof type === 'string' && type in typeNames
    ? typeNames[type as AlgorithmType]
    : '题目详情'
})

const imageUrl = computed(() => apiAssetUrl(problem.value?.data_image))

async function loadProblem() {
  loading.value = true
  errorMessage.value = ''
  result.value = undefined

  const problemId = typeof route.query.problem_id === 'string' ? route.query.problem_id : undefined
  const problemType =
    typeof route.query.problem_type === 'string' ? route.query.problem_type : undefined

  if (!problemId && !problemType) {
    errorMessage.value = '缺少题目类型或题目编号'
    loading.value = false
    return
  }

  try {
    const { data } = await api.get<ProblemResponse>('/algorithm', {
      params: problemId ? { problem_id: problemId } : { problem_type: problemType },
    })
    if (data.status === 'FAIL') throw new Error('invalid-problem')
    problem.value = data
    answer.value = ''
  } catch (error) {
    errorMessage.value = getApiError(error, '题目加载失败，请返回题目列表重试')
  } finally {
    loading.value = false
  }
}

async function submitAnswer() {
  if (!answer.value.trim() || !problem.value) return

  submitting.value = true
  errorMessage.value = ''
  try {
    const { data } = await api.post<SubmissionResponse>('/algorithm', {
      problem_id: problem.value.problem_id,
      answer: answer.value,
    })
    result.value = data.answer ? 'correct' : 'wrong'
    problem.value.last_answer = data.last_answer || answer.value
  } catch (error) {
    errorMessage.value = getApiError(error, '答案提交失败')
  } finally {
    submitting.value = false
  }
}

function resizeProblemFrame(event: Event) {
  const frame = event.target as HTMLIFrameElement
  const resize = () => {
    const bodyHeight = frame.contentDocument?.body.scrollHeight || 0
    const documentHeight = frame.contentDocument?.documentElement.scrollHeight || 0
    frame.style.height = `${Math.max(bodyHeight, documentHeight, 240)}px`
  }

  resize()
  window.setTimeout(resize, 100)
}

onMounted(loadProblem)
</script>

<template>
  <div class="content-page page-width problem-page">
    <div class="breadcrumb">
      <RouterLink :to="{ name: 'problems' }">题目</RouterLink>
      <span>/</span>
      <span>{{ problemTitle }}</span>
    </div>

    <LoadingState v-if="loading" label="正在生成或读取题目" />
    <ErrorState v-else-if="errorMessage && !problem" :message="errorMessage" @retry="loadProblem" />

    <div v-else-if="problem" class="workspace-grid">
      <section class="question-panel">
        <div class="workspace-heading">
          <div>
            <p class="eyebrow"><span></span> CURRENT PROBLEM</p>
            <h1>{{ problemTitle }}</h1>
          </div>
          <span class="problem-id">ID {{ problem.problem_id.slice(0, 8) }}</span>
        </div>

        <div class="problem-document">
          <iframe
            title="题目描述"
            :srcdoc="problem.data_problem"
            sandbox="allow-same-origin"
            @load="resizeProblemFrame"
          ></iframe>
          <img v-if="imageUrl" :src="imageUrl" alt="题目图示" />
        </div>
      </section>

      <aside class="answer-panel">
        <div class="answer-panel-head">
          <span>YOUR ANSWER</span>
          <span>01 / 01</span>
        </div>
        <h2>写下你的答案</h2>
        <p>请按照题目要求的格式输入。提交前建议再检查一次节点顺序与数值。</p>

        <form @submit.prevent="submitAnswer">
          <label class="field answer-field">
            <span>答案</span>
            <textarea
              v-model="answer"
              rows="6"
              placeholder="在这里输入答案…"
              :disabled="submitting || result === 'correct'"
            ></textarea>
          </label>

          <div v-if="problem.last_answer" class="last-answer">
            <span>上次提交</span>
            <code>{{ problem.last_answer }}</code>
          </div>

          <div
            v-if="result"
            class="answer-result"
            :class="`answer-result--${result}`"
            role="status"
          >
            <span>{{ result === 'correct' ? '✓' : '×' }}</span>
            <div>
              <strong>{{ result === 'correct' ? '回答正确' : '答案不正确' }}</strong>
              <p>
                {{
                  result === 'correct'
                    ? '做得好，可以回到列表挑战下一题。'
                    : '再检查一下推导过程，然后重新提交。'
                }}
              </p>
            </div>
          </div>

          <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>

          <button
            class="button button--primary submit-button"
            type="submit"
            :disabled="!answer.trim() || submitting || result === 'correct'"
          >
            {{ submitting ? '正在判定' : result === 'correct' ? '已完成' : '提交答案' }}
            <span v-if="!submitting" aria-hidden="true">→</span>
          </button>
        </form>
      </aside>
    </div>
  </div>
</template>
