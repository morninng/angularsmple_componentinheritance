import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usershow-base',
  templateUrl: './usershow-base.component.html',
  styleUrls: ['./usershow-base.component.css']
})
export class UsershowBaseComponent implements OnInit {

  userimg = '';
  username = '';

  constructor() { }

  ngOnInit() {
    this.userimg = 'http://genkidesuka.wp-x.jp/wp-content/uploads/2017/05/%E7%84%A1%E9%A1%8C-273.jpg';
    this.username = 'aaaa';
    this.extended_init();
  }

  extended_init(){}

}
