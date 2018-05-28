import React, { Component } from 'react'
import Mock from 'mockjs'
import styles from './index.less'

const testData = Mock.mock({
  "data|10000": [{
    id: '@id',
    name: '@name'
  }]
})

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = { change: false }
  }
  render() {
    console.log(testData);
    const { change } = this.state;
    return (
      <div>
        <a onClick={(e) => {
          requestAnimationFrame(() => {
            this.setState({
              change: !change
            })
            // const items = document.getElementsByClassName('item');
            // this.state.change = !this.state.change;
            // items.forEach((item) => {
            //   item.setAttribute('class', 'item ' + this.state.change?styles.itemChanged:styles.item);
            // })
          })


        }}>开始产生帧</a>
        {
          testData.data.map((item) => {
            return <div key={item.id} className={change?styles.itemChanged:styles.item}>{item.name}</div>
          })
        }
      </div>
    )
  }
}

export default Demo1
