import {Injectable} from '@angular/core';
import {HttpServer} from '../HttpServer';

@Injectable()
export class TestServer {
  constructor(private httpServer: HttpServer) {

  }
  test() {
    return this.httpServer.request({
      method: 'post',
      url: 'http://www.yuanyoudadi.com/yydd-web/product/list',
      data: {}
    });
  }
}
