import React, { Component } from 'react'
import { Checkbox } from 'antd'

class Tr extends Component {
  shouldComponentUpdate(newProps={}) {
    // 比较数据的是否不同
    const {data: oldData, checked: newChecked} = this.props;
    const {data: newData, checked: oldChecked} = newProps;
    let isNeedReRender = false;
    Object.keys(newData).forEach((key) => {
      if(newData[key] != oldData[key]) {
        isNeedReRender = true;
      }
    })

    // 比较勾选状态是否不一样
    if(newChecked != oldChecked) {
      isNeedReRender = true;
    }

    return isNeedReRender;
  }

  render() {
    const { data, onCheck, onDelete, checked } = this.props;

    return (
      <tr>
        <td><Checkbox onChange={ (e) => { onCheck(data.id) } } checked={ checked }/></td>
        {
          Object.keys(data).map((key, index) => (
            <td key={ index }>{data[key]}</td>
          ))
        }
        <td><a onClick={() => { onDelete(data.id) }}>删除</a></td>
      </tr>
    )
  }
}

export default Tr;
