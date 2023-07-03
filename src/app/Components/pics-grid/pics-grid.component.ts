import { Component, OnInit } from '@angular/core';
import { ImagesServiceService } from 'src/app/services/images-service.service';
import { Photos } from 'pexels/dist/types';

@Component({
  selector: 'PicsArts-pics-grid',
  templateUrl: './pics-grid.component.html',
  styleUrls: ['./pics-grid.component.css']
})
export class PicsGridComponent implements OnInit {

  constructor(private imageService:ImagesServiceService) {}

  private images:any
  private page:number =1
  private loading:boolean = false

  getterImages(){
    return this.images
  }
  getterPage(){
    return this.page
  }
  getterLoading(){
    return this.loading
  }

  async getImages() {
    this.loading = true
    this.images = await this.imageService.getImage(this.page)
    this.loading = false
  }

  nextPage(){
    this.page+=1;
    this.getImages()
  }

  prevPage(){
    this.page-=1;
    this.getImages()
  }

  ngOnInit(): void {
    this.getImages()
  }



}
