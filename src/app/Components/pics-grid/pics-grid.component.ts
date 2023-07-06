import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { ImagesServiceService } from 'src/app/services/images-service.service';


@Component({
  selector: 'PicsArts-pics-grid',
  templateUrl: './pics-grid.component.html',
  styleUrls: ['./pics-grid.component.css']
})



export class PicsGridComponent implements OnInit,OnChanges{

  @Input() search:string = ""

  constructor(private imageService:ImagesServiceService) {}
  
  private images:any
  private page:number =1
  private loading:boolean = false
  

  async getImages() {
    this.setterLoading(true)
    this.images = !this.search ? await this.imageService.getImage(this.page):
    await this.imageService.getImageSearch(this.page,this.search)
    this.setterImages(this.images)
    this.setterLoading(false)
  }

  nextPage(){
    window.scrollTo(0,0)
    this.setterPage(this.page+1)
    this.getImages()
  }

  prevPage(){
    window.scrollTo(0,0)
    this.setterPage(this.page-1)
    this.getImages()
  }

  getterImages(){
    return this.images
  }

  getterPage(){
    return this.page
  }

  getterLoading(){
    return this.loading
  }

  setterImages(data:any){
    this.images = data
  }

  setterPage(page:number){
    this.page = page
  }
  
  setterLoading(state:boolean){
    this.loading = state
  }

  ngOnInit(): void {
    this.getImages()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["search"]){
      this.setterPage(1)
      this.getImages()
    }
  }

}
