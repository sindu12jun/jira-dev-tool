import React, { useEffect } from 'react'

import { ExampleComponent } from 'jira-dev-tool3'
import 'jira-dev-tool3/dist/index.css'

const apiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  useEffect(() => {
    window.fetch(`${apiUrl}/projects`)
  }, [])
  return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
