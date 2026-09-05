import { AxiosError } from 'axios'
import { describe, expect, it } from 'vitest'
import { apiAssetUrl, getApiError } from './api'

describe('api helpers', () => {
  it('keeps absolute and data URLs unchanged', () => {
    expect(apiAssetUrl('https://example.com/graph.png')).toBe('https://example.com/graph.png')
    expect(apiAssetUrl('data:image/png;base64,AA==')).toBe('data:image/png;base64,AA==')
  })

  it('routes backend assets through the API prefix', () => {
    expect(apiAssetUrl('/algorithm_fig?problem_id=123')).toBe('/api/algorithm_fig?problem_id=123')
  })

  it('uses the backend error message when available', () => {
    const error = new AxiosError('Bad request', '400', undefined, undefined, {
      data: { error: '题目不存在' },
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: { headers: {} as never },
    })

    expect(getApiError(error)).toBe('题目不存在')
  })
})
