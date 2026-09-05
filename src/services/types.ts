export interface AuthResponse {
  status: boolean
  username?: string
  error?: string
}

export interface AlgorithmSummary {
  id: string
  problem_name: string
  problem_type: AlgorithmType
  algorithm: string
}

export type AlgorithmType = 'shortestpath' | 'tsp' | 'spantree' | 'roottree'

export interface ProblemResponse {
  problem_id: string
  data_problem: string
  data_image: string
  last_answer?: string
  status?: string | boolean
  error?: string
}

export interface SubmissionResponse {
  answer: boolean
  last_answer?: string
  error?: string
}

export interface StudyRecord {
  id: number
  problem_id: string
  username: string
  problem_type: string
  problem_status: string
  problem_time: string
}
