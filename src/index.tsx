import * as React from 'react'
import styles from './styles.module.css'
import { startServer } from './server'
import { installDevTool } from './dev-tool'

interface Props {
  text: string
}

export const loadDevTools = (callback: () => void) => {
  startServer()
  installDevTool()
  callback?.()
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
