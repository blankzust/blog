// 规则的结构为
// {
//   url1: {
//     template: mockjs规则对象 || 返回对象格式为{template: 具体的值}的function,
//     regrex?: 正则表达式 // 如存在，则拦截regrex对应值的，若不存在，则拦截url1完全匹配的地址
//   },
//   url2: {...}
// }
export default {
  '/queryList': {
    // 这种格式表示返回回来是数组还非对象
    'template|1-10': [
      {
        id: '@id',
        name: '@name'
      }
    ]
  },
  // 这个格式表示路径不是固定的，采用regrex匹配路径
  '/viewAlert': {
    'regrex': /\/viewAlert\//,
    'template': {}
  }
}
