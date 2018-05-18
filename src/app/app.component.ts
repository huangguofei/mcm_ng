import { Component } from '@angular/core';
import { TestServer } from './server/TestServer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestServer]
})
export class AppComponent {
  title = 'app';
  constructor(public testServer: TestServer) {
    enum a {sex, old, age};
    this.title = a[2];
  }

  testEvent() {
    this.testServer.test().then(result => {
      console.log(result);
    });
  }


}
