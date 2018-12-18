
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../environments/environment';

let serverObj = {
  UUMS_SERVER: `http://192.168.5.35:8058/uums-server/`,
  LOGIN_SERVER: `http://192.168.5.35:8058/gm-sso-server/`,
  ZRZY_SERVER: `http://192.168.5.35:8048/zrzy-register-server/`
};
// 生产环境重置服务地址
if (environment.production) {
  ajax({
    url: `../config.json`,
    responseType: 'json',
    async: false
  }).pipe(
    map(res => {
      if (!res.response) {
        throw new Error('Value expected!');
      }
      return res.response;
    }),
    catchError(err => of([]))
  ).subscribe(response => {
    for (const key in serverObj) {
      if (serverObj.hasOwnProperty(key)) {
        let newObj = response.find(element => element.name === key);
        newObj ? serverObj[key] = newObj.value : console.error(`请配置${key}路径`);
      }
    }
  });
}
// 设置服务地址
const APP_KEY = 'GM_NR';
const UUMS_SERVER = serverObj['UUMS_SERVER'];
const LOGIN_SERVER = serverObj['LOGIN_SERVER'];
const ZRZY_SERVER = serverObj['ZRZY_SERVER'];

export { UUMS_SERVER, LOGIN_SERVER, ZRZY_SERVER, APP_KEY };
