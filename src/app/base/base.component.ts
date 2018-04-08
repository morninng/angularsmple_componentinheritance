import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector:  'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Output() vote = new EventEmitter<string>()

  data;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.get_aaa();
  }

  Vote(text){
    this.vote.emit(text);
  }

}
