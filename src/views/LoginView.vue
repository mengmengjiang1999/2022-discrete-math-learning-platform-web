<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, getApiError } from '@/services/api'
import { setAuthenticated } from '@/composables/useAuth'
import type { AuthResponse } from '@/services/types'

const route = useRoute()
const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')
const submitting = ref(false)
const showPassword = ref(false)

async function submit() {
  errorMessage.value = ''

  if (!username.value.trim()) {
    errorMessage.value = '请输入用户名'
    return
  }
  if (password.value.length < 6 || password.value.length > 16) {
    errorMessage.value = '密码长度应为 6–16 位'
    return
  }

  submitting.value = true
  try {
    const { data } = await api.post<AuthResponse>('/login', {
      username: username.value.trim(),
      password: password.value,
    })
    if (!data.status) {
      errorMessage.value = data.error || '用户名或密码错误'
      return
    }

    setAuthenticated(username.value.trim())
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/problems'
    await router.replace(redirect)
  } catch (error) {
    errorMessage.value = getApiError(error, '无法连接服务器，请确认后端已启动')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="auth-page page-width">
    <section class="auth-intro">
      <p class="eyebrow"><span></span> WELCOME BACK</p>
      <h1>继续你的<br /><em>思维训练。</em></h1>
      <p>登录后获取新的随机题目，查看历史提交，并从错误答案中继续推演。</p>
      <div class="auth-quote">
        <span>“</span>
        <p>数学不是关于数字、方程或算法，而是关于理解。</p>
      </div>
    </section>

    <section class="auth-panel" aria-labelledby="login-title">
      <div class="panel-kicker">ACCOUNT / 01</div>
      <h2 id="login-title">登录账户</h2>
      <p class="panel-description">使用平台已有账户进入学习空间</p>

      <form class="form-stack" novalidate @submit.prevent="submit">
        <label class="field">
          <span>用户名</span>
          <input
            v-model="username"
            name="username"
            type="text"
            autocomplete="username"
            maxlength="64"
            placeholder="请输入用户名"
            :disabled="submitting"
          />
        </label>

        <label class="field">
          <span>密码</span>
          <span class="password-field">
            <input
              v-model="password"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              minlength="6"
              maxlength="16"
              placeholder="6–16 位密码"
              :disabled="submitting"
            />
            <button
              type="button"
              :aria-label="showPassword ? '隐藏密码' : '显示密码'"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '隐藏' : '显示' }}
            </button>
          </span>
        </label>

        <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>

        <button class="button button--primary submit-button" type="submit" :disabled="submitting">
          <span v-if="submitting" class="loader loader--small" aria-hidden="true"></span>
          {{ submitting ? '正在登录' : '进入学习空间' }}
          <span v-if="!submitting" aria-hidden="true">→</span>
        </button>
      </form>

      <p class="registration-note">当前平台暂未开放自行注册，请联系管理员获取账户。</p>
    </section>
  </div>
</template>
