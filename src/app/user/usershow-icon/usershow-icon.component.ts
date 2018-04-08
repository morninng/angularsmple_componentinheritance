import { Component, OnInit, Input } from '@angular/core';
import { UsershowBaseComponent } from '../usershow-base/usershow-base.component';

export enum USERSHOW_IMAGESHAPE {
  CIRCLE = 'CIRCLE',
  RECTANGLE = 'RECTANGLE',

}

@Component({
  selector: 'app-usershow-icon',
  templateUrl: './usershow-icon.component.html',
  styleUrls: ['./usershow-icon.component.css']
})
export class UsershowIconComponent extends UsershowBaseComponent {

  @Input()
  set imageshape(imageshape: string) {
    if (imageshape === USERSHOW_IMAGESHAPE.CIRCLE) {
      this.is_circle = true;
    }
  };
  @Input() width;
  @Input() height;

  is_circle = false;


  percent100 = false;

  extended_init() {
    
    if (!this.width && !this.height ) {
      this.percent100 = true;
    }
  }

}
