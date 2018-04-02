import React, { Component } from 'react'
import Mock from 'mockjs'
import $ from 'jquery'

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = { requestContent: '' };
    this.startMock.bind(this);
    this.requestBaidu.bind(this);
  }
  startMock() {
    console.log("开始mock");
    Mock.mock("http://m.weather.com.cn/data/101010100.html", {
      msg: "请求被拦截了"
    })
  }
  endMock() {

  }
  requestBaidu() {
    $.get('/101010100.html', {}, (response) => {
      this.setState({requestContent: response});
    })
  }
  render() {
    const { requestContent } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.requestBaidu()}>点击向百度发送请求</button>
          <button onClick={() => this.startMock()}>点击开始拦截请求</button>
        </div>
        <div>
          { requestContent }
        </div>
      </div>
    );
  }
}

export default Demo1
