import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { Map, fromJS } from 'immutable'

class Tr extends Component {
  shouldComponentUpdate(newProps={}) {
    // 比较数据的是否不同
    const oldPropsMap = fromJS({...this.props});
    const newPropsMap = fromJS({...newProps});

    return !oldPropsMap.equals(newPropsMap);
  }

  render() {
    const { data, onCheck, onDelete, checked } = this.props;

    return (
      <tr>
        <td><Checkbox onChange={ function() { onCheck(data.id) } } checked={ checked } /></td>
        {
          Object.keys(data).map((key, index) => (
            <td key={ index }>{data[key]}</td>
          ))
        }
        <td><a onClick={function() { onDelete(data.id) }}>删除</a></td>
      </tr>
    )
  }
}

export default Tr;
