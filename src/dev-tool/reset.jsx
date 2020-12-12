import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      "您的所有数据(包括账户数据)都将被清空，确定吗？"
    );
    if (confirmed) {
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    }
  }
  return <Button size={'small'} onClick={clear}>清空数据库</Button>;
};
