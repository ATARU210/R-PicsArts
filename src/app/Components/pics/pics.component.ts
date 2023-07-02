import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'PicsArts-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  @Input() imgName:string="";
  @Input() imgUrl:string="";

  constructor() {}

  ngOnInit(): void {
  }

}
