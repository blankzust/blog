
import Mock from 'mockjs'
import { Tabs } from 'antd'
import NavigationLayout from '../../../components/MainLayout/NavigationLayout'
import ComponentMonitor from '../../../components/common/componentMonitor'
import DemoTable1 from './demoTable1'
import DemoTable2 from './demoTable2/index'
import DemoTable3 from './demoTable3/index'
import DemoTable5 from './demoTable5/index'
// import DemoTable4 from './demoTable4/index'

const TabPane = Tabs.TabPane;

export default function ({ location }) {

  return (
    <NavigationLayout location={location}>
      <Tabs>
        <TabPane tab="过多节点的Table" key={1}>
          <ComponentMonitor>
            <DemoTable1 />
          </ComponentMonitor>
        </TabPane>
        <TabPane tab="优化方案1" key={2}>
          <ComponentMonitor>
            <DemoTable2 />
          </ComponentMonitor>
        </TabPane>
        <TabPane tab="使用Immutable" key={3}>
          <ComponentMonitor>
            <DemoTable3 />
          </ComponentMonitor>
        </TabPane>
        <TabPane tab="使用Immutable2" key={4}>
          <ComponentMonitor>
            <DemoTable5 />
          </ComponentMonitor>
        </TabPane>
      </Tabs>
    </NavigationLayout>
  )
}
