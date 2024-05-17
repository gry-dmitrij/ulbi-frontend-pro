export type BuildMode = 'production' | 'development'

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode?: BuildMode
  port?: number
  analyzer?: boolean
  apiUrl?: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
  isAnalyzer: boolean
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
