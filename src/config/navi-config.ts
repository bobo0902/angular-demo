export const GLOBAL_FRAME_CONFIG = {
  systemName: '不动产登记信息汇交与监管系统',
  systemEnglishName: 'Real estate registration remittance supervision',
  navi: [{
    name: '首页',
    class: 'home',
    path: '/home',
  }, {
    name: '档案管理',
    class: 'book',
    path: '/file-management',
    children: [{
        name: '档案管理',
        class: 'hdd',
        path: '/management'
      },
      {
        name: '档案配置',
        class: 'setting',
        path: '/configuration'
      }
    ]
  }, {
    name: '查询',
    class: 'search',
    path: '/inquire',
    children: [{
      name: '综合查询',
      class: 'search',
      path: '/integrated-query'
    }, {
        name: '富文本编辑器',
        class: 'edit',
        path: '/form-tinymce'
      }]
  }]
};
