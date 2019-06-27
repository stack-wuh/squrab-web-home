const Mock = require('mockjs')

Mock.mock('/user/list', 'get', {
  'list|1-10': [
    {
      'name': '@cname',
      'age|2': /[0-9]/
    }
  ]
})