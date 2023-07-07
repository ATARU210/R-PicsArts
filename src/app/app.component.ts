import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'R-PicsArts';
  
  constructor() {}

  private search:string = ""
  
  getterSearch(){
    return this.search
  }

  setterSearch(data:string){
    this.search = data
  }



}
