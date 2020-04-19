import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { UserImage } from 'src/app/DTO/Image';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }
  imageUrl: string = this.auth.url + "user/addImage/";
  getImageUrl: string = this.auth.url + "user/GetImage/";
  uploadImage(image : UserImage){
    let jsonstr = JSON.stringify(image);
    return this.http.post(this.imageUrl,jsonstr, this.auth.httpOptions);
  }  
  getImage(image : UserImage){
    let jsonstr = JSON.stringify(image);
    return this.http.post(this.getImageUrl,jsonstr, this.auth.httpOptions);
  }

}
