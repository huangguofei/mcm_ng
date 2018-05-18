import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpServer {
  HttpHead = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private httpClient: HttpClient) {

  }

  // 统一发送请求
  public request(params: any): any {
    if (params['method'] === 'post' || params['method'] === 'POST') {
      return this.post(params['utl'], params['data']);
    } else {
      return this.get(params['url'], params['data']);
    }
  }

  // get请求
  public get(url: string, params: any): any {
    return this.httpClient.get(url, this.HttpHead)
      .toPromise().then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  // post请求
  public post(url: string, params: any) {
    return this.httpClient.post(url, params, this.HttpHead)
      .toPromise().then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  // 成功请求
  public handleSuccess(res: any) {
    let body = res['body'];
    if (body) {
      return {
        data: res.json().data || {},
        code: res.json().code || {}
      };
    } else {
      return {
        data: res.json().data || {},
        code: res.json().code || {}
      };
    }
  }

  // 处理失败
  public handleError(error) {
    console.log(error);
    let msg = '请求失败';
    if (error.status === 400) {
      console.log('请求参数正确');
    }
    if (error.status === 404) {
      console.error('请检查路径是否正确');
    }
    if (error.status === 500) {
      console.error('请求的服务器错误');
    }
    console.log(error);
    return {success: false, msg: msg};
  }

}
