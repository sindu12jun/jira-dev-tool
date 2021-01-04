import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { loadServer } from 'jira-dev-tool3'

loadServer(() => ReactDOM.render(<App />, document.getElementById('root')))
