import React, { Component } from 'react'
import Mock from 'mockjs'
import { Checkbox, message } from 'antd'
import MarkdownIt from 'markdown-it'
import MDReactComponent from 'markdown-react-js'
import styles from './index.less'
import LazyLoad, { forceCheck } from 'react-lazyload'

const md = new MarkdownIt();

class DemoTable1 extends Component {
  constructor(props) {
    super(props);
    const template = {
      'list|10000': [{
        'id|+1': 1,
        'name': '@cname',
        'sex|+1': ['男', '女'],
        'birthday': '@date("yyyy-MM-dd")'
      }]
    }
    const initState = { ...Mock.mock(template), checkedMap: {} }
    this.state = initState;
  }

  componentDidMount() {
    window.onscroll=() => {
      console.log("scroll");
      forceCheck();
    }
  }

  handleSingleCheck(id) {
    let checkedMap = this.state.checkedMap;
    if(checkedMap[id]) {
      checkedMap[id] = undefined;
    } else {
      checkedMap[id] = true;
    }
    const startTime = new Date();
    this.setState({...(this.state), checkedMap}, () => { message.info("勾选花费:" + (new Date() - startTime) + "ms") })
  }

  handleDelete(id) {
    let { list } = this.state;
    const newList = list.filter(item => item.id != id);
    const startTime = new Date();
    this.setState({ ...(this.state), list: newList }, () => { message.info("删除花费：" + (new Date() - startTime)) + "ms" });
  }

  render() {
    const { list, checkedMap } = this.state;

    return (
      <div className={ styles.container } >
        <table className={ styles.table }>
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
              list.map((item, index) => (
                <tr key={ index }>
                  <td><Checkbox onChange={ (e) => { this.handleSingleCheck(item.id) } } checked={ checkedMap[item.id] }/></td>
                  <td><span>{item.id}</span></td>
                  <td><span>{item.name}</span></td>
                  <td><span>{item.sex}</span></td>
                  <td><span>{item.birthday}</span></td>
                  <td><a onClick={() => {this.handleDelete(item.id)}}>删除</a></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default DemoTable1
