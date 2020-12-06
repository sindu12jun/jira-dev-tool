import React from 'react'
import { useLocalStorageState } from '../util'
import { Checkbox } from 'antd'

export const SwitchDevTool = () => {
  const [enableDevTools, setEnableDevTools] = useLocalStorageState(
    "dev-tools",
    process.env.NODE_ENV === "development"
  );

  const handleChange = (event) => setEnableDevTools(event.target.checked);

  return (
    <Checkbox checked={enableDevTools} onChange={handleChange}>
      Checkbox
    </Checkbox>
  );
};
