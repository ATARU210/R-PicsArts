import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient } from 'pexels';


@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {

  constructor() { }
  private client = createClient(environment.apiKey);
  private page = 2
  options = {
    per_page: 14,
    page: this.page
  }

  async getImage(){
    try{
      const result = (await this.client.photos.curated(this.options))
      const res = {
        status: 200,
        data: result
      }
      return res
    }catch(err){
      let error ={
        status:400,
        error: err
      }
      return error
    }
  }
}
