import * as React from 'react'
import { startServer } from './server'
import { DevTool } from './dev-tool'

interface Props {
  text: string
}

export const loadDevTools = (callback: () => void) => {
  startServer();
  if (callback) {
    callback()
  }
}

export const Dev = DevTool

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
