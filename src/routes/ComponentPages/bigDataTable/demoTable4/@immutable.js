import { Map, fromJS } from 'immutable'

export default function(target) {
  target.prototype.shouldComponentUpdate = function(newProps, newState) {
    // 比较数据的是否不同
    const oldPropsMap = fromJS({...this.props});
    const newPropsMap = fromJS({...newProps});

    return !oldPropsMap.equals(newPropsMap);
  }.bind(target)
}
