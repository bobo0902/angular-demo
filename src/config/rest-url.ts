import { ZRZY_SERVER } from './config';
// 请求地址
export const RESTURL = {
  // 综合查询
  integratedQuery: `${ZRZY_SERVER}api/queryRegistrationInfo/getComprehensivePageList`,
  getComprehensiveInfo: `${ZRZY_SERVER}api/queryRegistrationInfo/getComprehensiveInfo`// 获取详情表格数据
};
