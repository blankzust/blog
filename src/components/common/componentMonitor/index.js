import React, { Component } from 'react'
import { message } from 'antd'

class ComponentMonitor extends Component {

  componentWillMount() {
    this.firstRender = {
      startTime: new Date(),
    }
  }

  componentDidMount() {
    this.firstRender.endTime = new Date();
    this.firstRender.spendTime = this.firstRender.endTime - this.firstRender.startTime;
    message.info("第一次渲染花费时间：" + this.firstRender.spendTime + "ms", 5);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    )
  }
}

export default ComponentMonitor
