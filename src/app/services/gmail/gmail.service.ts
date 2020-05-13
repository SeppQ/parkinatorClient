import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GmailAccount } from 'src/app/DTO/GmailAccount';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  gmailurl : string = "https://www.googleapis.com/gmail/v1/users/michael.c.k.lawson%40gmail.com/profile?alt=json&key=[AIzaSyB_4nuyAQTrtZEKHcksjudLpZL-0ur64-A]'";

  getProfile() : Observable<GmailAccount>{
    return this.http.get<GmailAccount>(this.gmailurl,this.auth.httpOptions);
  }
}
