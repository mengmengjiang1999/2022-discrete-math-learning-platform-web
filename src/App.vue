<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/services/api'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { auth, clearAuth } = useAuth()
const menuOpen = ref(false)

async function logout() {
  try {
    await api.post('/logout')
  } finally {
    clearAuth()
    menuOpen.value = false
    await router.push({ name: 'home' })
  }
}
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="nav-wrap">
        <RouterLink class="brand" :to="{ name: 'home' }" aria-label="离散数学平台首页">
          <span class="brand-mark" aria-hidden="true"> <i></i><i></i><i></i> </span>
          <span>离散<span class="brand-dot">.</span></span>
        </RouterLink>

        <button
          class="menu-button"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-navigation"
          aria-label="切换导航菜单"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span>
        </button>

        <nav id="primary-navigation" class="primary-nav" :class="{ open: menuOpen }">
          <RouterLink :to="{ name: 'home' }" @click="menuOpen = false">首页</RouterLink>
          <RouterLink
            v-if="auth.authenticated"
            :to="{ name: 'problems' }"
            @click="menuOpen = false"
          >
            题目
          </RouterLink>
          <RouterLink v-if="auth.authenticated" :to="{ name: 'records' }" @click="menuOpen = false">
            学习记录
          </RouterLink>
          <span class="nav-spacer"></span>
          <span v-if="auth.authenticated" class="user-chip">
            <span class="user-dot"></span>{{ auth.username }}
          </span>
          <button v-if="auth.authenticated" class="nav-action" type="button" @click="logout">
            退出
          </button>
          <RouterLink v-else class="nav-action" :to="{ name: 'login' }" @click="menuOpen = false">
            登录
          </RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <span>离散数学智能教学平台</span>
      <span>用图与练习，理解抽象结构</span>
    </footer>
  </div>
</template>
