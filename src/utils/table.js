import {
  handleBtnAddClick,
  handleBtnDelClick
} from './table.click.js'

export const table = [
  {
    name: '用户列表',
    params: ['用户列表'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '用户名',
        type: 'default',
        field: '',
      },
      {
        label: '姓名',
        type: 'default',
        field: '',
      },
      {
        label: '身份',
        type: 'default',
        field: '',
      },
      {
        label: '操作',
        type: 'setting',
        list: [
          {
            text: '添加',
            click: handleBtnAddClick
          },
          {
            text: '删除',
            click: handleBtnDelClick
          }
        ]
      }
    ],
  },
  {
    name: '广告商列表',
    params: ['广告商列表'],
    type: 'index',
    label: '序号',
    list: [
      {
        label: '账户名',
        type: '',
        field: ''
      },
      {
        label: '联系人姓名',
        type: '',
        field: ''
      },
      {
        label: '公司名称',
        type: '',
        field: ''
      },
      {
        label: '添加时间',
        type: '',
        field: ''
      },
      {
        label: '最新编辑时间',
        type: '',
        field: ''
      },
      {
        label: '状态',
        type: '',
        field: ''
      },
      {
        label: '管理',
        type: 'setting',
        list: [
          {
            text: '查看操作日志'
          },
          {
            text: '登录当前账户'
          },
          {
            text: '编辑'
          }
        ]
      },
    ]
  }
]
