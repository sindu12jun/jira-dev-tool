import * as React from 'react'
import { installDevTool } from './dev-tool'
import { startServer } from './server'

interface Props {
  text: string
}

export const loadDevTools = (callback: () => void) => {
  startServer();
  installDevTool()
  if (callback) {
    callback()
  }
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
