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

  getterImages(){
    return this.images
  }

  async getImages() {
    this.images = await this.imageService.getImage()
    console.log(this.images)
  }

  ngOnInit(): void {
    this.getImages()
  }

}
