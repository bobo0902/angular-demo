let GLOBAL_FRAME_CONFIG = {
  //logo: require('../theme/img/index/1.png'), //logo图片路径
  systemName: '不动产登记信息汇交与监管系统',
  systemEnglishName: 'Real estate registration remittance supervision',
  navi: [{
    name: '首页',
    class: 'icon-th-list',
    path: '/home',
  }, {
    name: '档案管理',
    path: '/file-management',
    children: [{
        name: '档案管理',
        class: 'icon-th-list',
        path: '/management'
      },
      {
        name: '档案配置',
        class: 'icon-th-list',
        path: '/configuration'
      }
    ]
  }]
};
export {
  GLOBAL_FRAME_CONFIG
}
