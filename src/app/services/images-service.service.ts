import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient } from 'pexels';


@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {

  constructor() { }
  private client = createClient(environment.apiKey);

  async getImage(page:number){
    try{
      const result = (await this.client.photos.curated({
        per_page: 14,
        page: page}))
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
  async getImageSearch(page:number, query:string){
    try{
      const result = (await this.client.photos.search({
        per_page: 14,
        query: query,
        page: page}))
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
