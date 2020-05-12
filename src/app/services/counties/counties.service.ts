import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counties } from 'src/app/DTO/Counties';

@Injectable({
  providedIn: 'root'
})
export class CountiesService {

  constructor(private auth : AuthenticationService, private http: HttpClient ) {}

  countiesUrl : string = this.auth.url + "Counties/";

  getCounties(): Observable<Counties[]>{
    return this.http.get<Counties[]>(this.countiesUrl, this.auth.httpOptions);
  }
}
