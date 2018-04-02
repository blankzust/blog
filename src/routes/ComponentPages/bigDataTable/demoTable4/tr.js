import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { Map, fromJS } from 'immutable'
import immutable from './@immutable.js'

class Tr extends Component {

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

console.log(immutable);

export default immutable(new Tr());
