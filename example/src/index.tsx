import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { loadDevTools } from 'jira-dev-tool3'

loadDevTools(() => ReactDOM.render(<App />, document.getElementById('root')))
