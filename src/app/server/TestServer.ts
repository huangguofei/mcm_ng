import {Injectable} from '@angular/core';
import {HttpServer} from '../HttpServer';

@Injectable()
export class TestServer {
  constructor(private httpServer: HttpServer) {

  }

  test() {
    $cookie.set('Hm_lpvt_c50daaaa5cfdae76b896d28564d58cf5', '1526646998');
    $cookie.set('Hm_lvt_a80131c47c9510dc37c21b92f3404763', '1526646998');
    $cookie.set('Hm_lpvt_a80131c47c9510dc37c21b92f3404763', '1526646998');

    return this.httpServer.request({
      method: 'post',
      url: 'yydd-web/product/list',
      data: {}
    });
  }
}
