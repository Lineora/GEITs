import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geits';
  config: any;
  fullpage_api: any; 
  /**
   *
   */
  constructor() {
    
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      anchors: ['home', 'about-us', 'contact'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin : any, destination: any, direction: any) => {
        console.log(origin.index);
      }
      
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
