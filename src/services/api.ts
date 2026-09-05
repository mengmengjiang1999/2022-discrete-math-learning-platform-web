import axios, { AxiosError } from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'

export const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15_000,
  withCredentials: true,
  headers: { Accept: 'application/json' },
})

export function apiAssetUrl(path?: string): string {
  if (!path) return ''
  if (/^(data:|https?:\/\/)/.test(path)) return path

  return `${apiBaseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

export function getApiError(error: unknown, fallback = '请求失败，请稍后再试'): string {
  if (error instanceof AxiosError) {
    const data = error.response?.data as { error?: string; message?: string } | undefined
    return data?.error || data?.message || fallback
  }

  return fallback
}
