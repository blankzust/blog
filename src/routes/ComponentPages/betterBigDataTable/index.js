import React from 'react'
import { Tabs } from 'antd'
import Demo1 from './demo1/index.js'
import NavigationLayout from '../../../components/MainLayout/NavigationLayout'

const TabPane = Tabs.TabPane;
export default function({location}) {
  return (
    <NavigationLayout location={location}>
      <Tabs>
        <TabPane tab="帧的演示" key={1}>
          <Demo1 />
        </TabPane>
      </Tabs>
    </NavigationLayout>
  )
}
