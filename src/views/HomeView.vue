<script setup lang="ts">
import { onMounted } from 'vue'
import { api } from '@/services/api'
import { useAuth } from '@/composables/useAuth'

const { auth, ensureAuth } = useAuth()

const topics = [
  { code: '01', name: '最短路径', description: '在加权图中寻找代价最小的路线', tone: 'blue' },
  { code: '02', name: '旅行商问题', description: '理解组合优化与搜索空间', tone: 'violet' },
  { code: '03', name: '支撑树计数', description: '从连通图探索生成树的数量', tone: 'green' },
  { code: '04', name: '根树计数', description: '训练树结构与计数思维', tone: 'amber' },
]

onMounted(() => {
  void ensureAuth()
  void api.get('/access').catch(() => undefined)
})
</script>

<template>
  <div class="home-view">
    <section class="hero page-width">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> DISCRETE MATHEMATICS LAB</p>
        <h1>看见结构，<br /><em>理解算法。</em></h1>
        <p class="hero-lead">
          将抽象的离散数学问题变成可观察、可练习、可追踪的学习体验。每次提交，都让你的思路更清晰一点。
        </p>
        <div class="hero-actions">
          <RouterLink
            class="button button--primary"
            :to="auth.authenticated ? { name: 'problems' } : { name: 'login' }"
          >
            {{ auth.authenticated ? '继续练习' : '开始学习' }}
            <span aria-hidden="true">↗</span>
          </RouterLink>
          <a class="text-link" href="#topics">浏览学习内容 <span aria-hidden="true">↓</span></a>
        </div>
        <p v-if="auth.authenticated" class="welcome-back">
          <span class="user-dot"></span>欢迎回来，{{ auth.username }}
        </p>
      </div>

      <div class="hero-visual" aria-label="由节点和边组成的抽象图结构">
        <div class="visual-grid"></div>
        <svg viewBox="0 0 600 540" role="img">
          <defs>
            <linearGradient id="edge" x1="0" x2="1">
              <stop offset="0" stop-color="#60a5fa" />
              <stop offset="1" stop-color="#a78bfa" />
            </linearGradient>
          </defs>
          <g class="edges" fill="none" stroke="url(#edge)" stroke-width="2">
            <path d="M100 385L218 278L342 345L470 190" />
            <path d="M218 278L295 115L470 190" />
            <path d="M342 345L500 420L470 190" />
            <path d="M100 385L182 458L342 345" />
          </g>
          <g class="nodes">
            <circle cx="100" cy="385" r="24" />
            <circle cx="218" cy="278" r="32" />
            <circle cx="295" cy="115" r="20" />
            <circle cx="342" cy="345" r="27" />
            <circle cx="470" cy="190" r="37" />
            <circle cx="500" cy="420" r="18" />
            <circle cx="182" cy="458" r="14" />
          </g>
        </svg>
        <div class="visual-label visual-label--a"><span></span>CONNECTED</div>
        <div class="visual-label visual-label--b">d(u, v) = min</div>
        <div class="orbit orbit--one"></div>
        <div class="orbit orbit--two"></div>
      </div>
    </section>

    <section id="topics" class="topics-section page-width">
      <div class="section-heading">
        <div>
          <p class="eyebrow"><span></span> LEARNING PATH</p>
          <h2>四个主题，一条清晰的学习路径</h2>
        </div>
        <p>从路径规划到图结构计数，用随机生成的题目反复练习核心概念。</p>
      </div>

      <div class="topic-grid">
        <article
          v-for="topic in topics"
          :key="topic.code"
          class="topic-card"
          :class="`tone-${topic.tone}`"
        >
          <span class="topic-number">{{ topic.code }}</span>
          <div class="topic-symbol" aria-hidden="true"><i></i><i></i><i></i></div>
          <h3>{{ topic.name }}</h3>
          <p>{{ topic.description }}</p>
          <RouterLink
            class="card-link"
            :to="auth.authenticated ? { name: 'problems' } : { name: 'login' }"
            :aria-label="`学习${topic.name}`"
            >↗</RouterLink
          >
        </article>
      </div>
    </section>
  </div>
</template>
