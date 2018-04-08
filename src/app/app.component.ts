import { Component } from '@angular/core';

import { USERSHOW_IMAGESHAPE } from './user/usershow-icon/usershow-icon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  USERSHOW_IMAGESHAPE = USERSHOW_IMAGESHAPE;

  title = 'app';

  onVote(data){
    console.log(data);
  }


}
