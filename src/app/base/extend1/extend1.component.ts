import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-extend1',
  templateUrl: './extend1.component.html',
  styleUrls: ['./extend1.component.css']
})
export class Extend1Component extends BaseComponent {

  @Input() additional;


}
