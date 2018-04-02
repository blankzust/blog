import Mock from 'mockjs'
import mockRules from './mockRuleData'

export function mockStart(api) {
  let ruleMap = {};
  Object.keys(mockRules).map((key) => {
    const rule = mockRules[key];
    if (typeof rule.template === 'function') {
      Mock.mock(rule.regrex || key, rule.template);
    } else {
      Mock.mock(rule.regrex, () => Mock.mock(rule).template);
    }
  })
}
