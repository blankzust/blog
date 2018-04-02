import React, { Component } from 'react'
import { Tabs } from 'antd'
import Demo1 from './demo1'
import NavigationLayout from '../../../components/MainLayout/NavigationLayout'
const TabPane = Tabs.TabPane

export default function({location}) {
  return (
    <NavigationLayout location={location}>
    <div>
      <Tabs>
        <TabPane tab="简单的例子" key={ 1 }>
          <Demo1 />
        </TabPane>
      </Tabs>
    </div>
    </NavigationLayout>
  )
}
