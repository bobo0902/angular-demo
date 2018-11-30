import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { APP_KEY, LOGIN_SERVER, Cookie } from '@static-resources';

export class Login {
  constructor() {

  }
  login() {
    let cookie = new Cookie();
    ajax({
      url: `${LOGIN_SERVER}login?username=gss&password=As5RPtiDBTUGkv3OzPsQRg==&appKey=${APP_KEY}`,
      responseType: 'json'
    }).pipe(
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    ).subscribe(response => {
      cookie.addCookie('clientServerToken', response.data.gmsso_ser_ec_key, (1 / 48));
      cookie.addCookie('clientCliToken', response.data.gmsso_cli_ec_key, (1 / 48));
    });
  }
}
