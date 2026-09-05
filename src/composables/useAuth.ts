import { readonly, reactive } from 'vue'
import { api } from '@/services/api'
import type { AuthResponse } from '@/services/types'

const state = reactive({
  checked: false,
  loading: false,
  authenticated: false,
  username: '',
})

let pendingCheck: Promise<boolean> | undefined

export async function ensureAuth(force = false): Promise<boolean> {
  if (state.checked && !force) return state.authenticated
  if (pendingCheck) return pendingCheck

  state.loading = true
  pendingCheck = api
    .get<AuthResponse>('/login_status')
    .then(({ data }) => {
      state.authenticated = data.status === true
      state.username = data.username || ''
      return state.authenticated
    })
    .catch(() => {
      state.authenticated = false
      state.username = ''
      return false
    })
    .finally(() => {
      state.checked = true
      state.loading = false
      pendingCheck = undefined
    })

  return pendingCheck
}

export function setAuthenticated(username: string): void {
  state.checked = true
  state.authenticated = true
  state.username = username
}

export function clearAuth(): void {
  state.checked = true
  state.authenticated = false
  state.username = ''
}

export function useAuth() {
  return { auth: readonly(state), ensureAuth, setAuthenticated, clearAuth }
}
