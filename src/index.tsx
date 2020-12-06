import * as React from 'react'
import styles from './styles.module.css'
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
  return <div className={styles.test}>Example Component: {text}</div>
}
