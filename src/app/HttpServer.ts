import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpServer {
  HttpHead = new HttpHeaders({'Content-Type': 'application/json'}).append('Cookie','Hm_lvt_c50daaaa5cfdae76b896d28564d58cf5=1526646998; Hm_lpvt_c50daaaa5cfdae76b896d28564d58cf5=1526646998; Hm_lvt_a80131c47c9510dc37c21b92f3404763=1526646998; Hm_lpvt_a80131c47c9510dc37c21b92f3404763=1526646998');

  constructor(private httpClient: HttpClient) {

  }

  // 统一发送请求
  public request(params: any): any {
    if (params['method'] === 'post' || params['method'] === 'POST') {
      return this.post(params['url'], params['data']);
    } else {
      return this.get(params['url'], params['data']);
    }
  }

  // get请求
  public get(url: string, params: any): any {
    return this.httpClient.get(url, {headers: this.HttpHead})
      .toPromise().then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  // post请求
  public post(url: string, params: any) {
    console.log(url)
    return this.httpClient.post(url, params, {
      headers: this.HttpHead
   }).toPromise().then(this.handleSuccess).catch(res => this.handleError(res));
    // .toPromise().then(this.handleSuccess)
    // .catch(res => this.handleError(res));
  }

  // 成功请求
  public handleSuccess(res: any) {
    const body = res['body'];
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
    const msg = '请求失败';
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
