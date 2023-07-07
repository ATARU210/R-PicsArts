import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'PicsArts-header-principal-menu',
  templateUrl: './header-principal-menu.component.html',
  styleUrls: ['./header-principal-menu.component.css']
})
export class HeaderPrincipalMenuComponent implements OnInit {
  @Input() category:string = ""
  @Output() newCategory = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


  openMenu(){
    const background = document.getElementsByClassName('background-left-bar');
    const menu = document.getElementsByClassName("left-bar");
    menu[0].getAttribute("class")==="left-bar"?menu[0].setAttribute("class","left-bar active"):menu[0].setAttribute("class","left-bar");
    background[0].getAttribute("class")==="background-left-bar"?background[0].setAttribute("class","background-left-bar active"):background[0].setAttribute("class","background-left-bar");
  }
  openRecommended(){
    const recommended = document.getElementsByClassName('recommended');
    recommended[0].getAttribute("class")==="recommended"?recommended[0].setAttribute("class","recommended active"):recommended[0].setAttribute("class","recommended");
  }
  clickOption(array:number){
    const option=document.getElementsByClassName("option");
    for(let i=0;i<option.length;i++){
      if(i!==array){
        option[i].setAttribute("class","option");
      }
    }
    option[array].getAttribute("class")==="option"?option[array].setAttribute("class","option active"):option[array].setAttribute("class","option");
    
  }
}
