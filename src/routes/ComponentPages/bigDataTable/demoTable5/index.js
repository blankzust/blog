import { Component } from 'react'
import { Map, List } from 'immutable'

import Tr from './tr.js'


class DemoTable5 extends Component {
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
    const mockData = Mock.mock(template);
    const list = List(mockData.list);


    const initState = Map({ list: list, checkedMap: Map() })
    this.state = initState;
    this.handleSingleCheck = this.handleSingleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSingleCheck(id) {
    let checkedMap = this.state.get('checkedMap');
    if (checkedMap.get[id]) {
      checkedMap = checkedMap.delete(id);
    } else {
      checkedMap = checkedMap.set(id, true);
    }
    const startTime = new Date();
    this.state = this.state.set("checkedMap", checkedMap);
    this.setState(this.state, () => { message.info("勾选花费：" + (new Date() - startTime)) + "ms" })
  }

  handleDelete(id) {
    let list = this.state.get('list');
    const newList = list.filter(item => item.get("id") != id);
    const startTime = new Date();
    this.state = this.state.set('list', list);
    this.setState(this.state, () => { message.info("删除花费：" + (new Date() - startTime)) + "ms" });
  }

  render() {


    let list = this.state.get("list");

    return (
      <div className={styles.container} >
        <table className={styles.table}>
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
            {/* {
              list.map((item, index) => {
                return (
                  <Tr data={{ ...item }} key={item.id}
                    onCheck={this.handleSingleCheck}
                    onDelete={this.handleDelete}
                    checked={checkedMap[item.id]}
                  />
                )
              }
            } */}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DemoTable5
