import React, { Component } from 'react'
import Mock from 'mockjs'

const template = {
  'list|10000': [{
    'id|+1': 1,
    'name': '@cname',
    'sex|+1': ['男', '女'],
    'birthday': '@date("yyyy-MM-dd")'
  }]
}

const data = Mock.mock(template).list;

class BetterTable extends Component {
  constructor(props) {
    super(props);
    this.state = { start: 0, end: 40, data }
    this.oldScrollTop = 0;
    this.oldScrollTop = document.documentElement.scrollTop;
    window.addEventListener("scroll", this.scrollEvent.bind(this));
  }
  scrollEvent(e) {
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop - this.oldScrollTop > 200 || this.oldScrollTop - scrollTop > 200) {
      this.setState({ end: scrollTop/18 + 40 });
      this.setState({ start: scrollTop/18 })
      this.oldScrollTop = scrollTop
    }

    // if(scrollTop - this.oldScrollTop > 40 || scrollTop - this.oldScrollTop < -40) {
    //   this.setState({ start: scrollTop/18, end: scrollTop/18 + 40 });
    //   this.oldScrollTop = scrollTop;
    // }
  }
  render() {
    const { start, end } = this.state;
    const showData = data.filter((item, index) => index >= start && index <= end);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>编号</th>
              <th>姓名</th>
              <th>性别</th>
              <th>生日</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              start > 0?
              <tr><td style={{ height: 18, transform: "scale(" + start + "," + start + ")" }} colSpan={6}></td></tr>
              :
              undefined
            }
            {
              showData.map((item, index) => (<tr key={index}>
                <td></td>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.birthday}</td>
                <td></td>
              </tr>))
            }
            {
              data.length > end?
              <tr><td style={{ height: 18 * (data.length - end) }} colSpan={6}></td></tr>
              :
              undefined
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default BetterTable
