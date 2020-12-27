import { startServer } from './server'
import { DevTool } from './dev-tool'


export const loadServer = (callback: () => void) => {
  startServer();
  if (callback) {
    callback()
  }
}

export const DevTools = DevTool

