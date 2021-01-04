import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Drawer, Tabs, Tooltip, Typography } from 'antd'
import { RequestTime } from './request-time'
import { GlobalOutlined, SettingOutlined, SettingTwoTone, StopOutlined } from '@ant-design/icons'
import { FailureRate } from './failure-rate'
import { Reset } from './reset'
import { FailRule } from './fail-rule'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import 'antd/dist/antd.css'

const { Text, Link } = Typography
const { TabPane } = Tabs

export const DevTool = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      {visible ? null : (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 9999
          }}
        >
          <Tooltip title={'点击使用开发者控制台'}>
            <SettingTwoTone
              style={{ fontSize: '22px' }}
              onClick={() => setVisible(true)}
            />
          </Tooltip>
        </div>
      )}
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        bodyStyle={{ padding: '10px' }}
        placement={'bottom'}
        key={'bottom'}
        height={'40%'}
      >
        <Text type="secondary">开发者控制台</Text>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <SettingOutlined />
                控制台
              </span>
            }
            key="1"
          >
            <div style={{ marginBottom: '0.5rem' }} className={'form-item'}>
              <Reset />
            </div>
            <div
              style={{ marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between' }}
            >
              <label>请求最短时间</label>
              <RequestTime />
            </div>
            <div
              className={'form-item'}
              style={{ marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between' }}
            >
              <label>请求失败比例</label>
              <FailureRate />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <StopOutlined />
                异步请求失败设置
              </span>
            }
            key="2"
          >
            <FailRule />
          </TabPane>
          <TabPane
            tab={
              <span>
                <GlobalOutlined />
                React Query
              </span>
            }
            key="3"
          >
            <ReactQueryDevtoolsPanel />
          </TabPane>
        </Tabs>

        {/*<RequestTime/>*/}
      </Drawer>
    </div>
  )
}

export const installDevTool = () => {
  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTool />, devToolsRoot)
}
