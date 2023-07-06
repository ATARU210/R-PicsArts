import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'PicsArts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input() search:string = ""
  @Output() newSearch = new EventEmitter<string>()
  private category:string = ""

  getterCategory(){
    return this.category
  }

  setterCategory(category:string){
    this.category = category 
  }
  
  constructor() { }

  setterSearch(){
    window.scrollTo(0,0)
    this.newSearch.emit(this.search + this.category)
  }
  
  /*searchAction(){
    let $search:HTMLElement|null = document.querySelector("search")
    this.setSearch($search?.getAttribute("value") ?? "")
  }*/

}
