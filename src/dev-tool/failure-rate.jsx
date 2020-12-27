import React from 'react'
import { useLocalStorageState } from '../util'
import { InputNumber } from 'antd'

export const FailureRate = () => {
  const [failureRate, setFailureRate] = useLocalStorageState(
    "__jira_failure_rate__",
    0
  );

  const handleChange = (value) => {
    setFailureRate(Number(value));
  };

  return (
    <InputNumber
      style={{ width: "100px" }}
      className={"item"}
      formatter={(value) => `${value}%`}
      parser={(value) => value.replace("%", "")}
      value={failureRate}
      min={0}
      max={100}
      onChange={handleChange}
    />
  );
};
