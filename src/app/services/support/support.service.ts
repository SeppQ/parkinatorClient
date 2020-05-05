import { Injectable } from '@angular/core';
import { Support } from 'src/app/DTO/Support';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  sup: Support;
  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  support: string = this.auth.url + "Support";
  removerSupport: string = this.auth.url + "Support/removeSupport/";
  getTicketsById : string = this.auth.url + "Support/getMessagesById/";
  
  sendTicket(sup: Support) {
    let jsonstr = JSON.stringify(sup);

    return this.http.post(this.support,jsonstr,this.auth.httpOptions);
  }

  getTicekts(): Observable<Support[]>{
    return this.http.get<Support[]>(this.support, this.auth.httpOptions);
  }  
  getTicektsById(sup : Support): Observable<Support[]>{
    let jsonstr = JSON.stringify(sup);
 
    return this.http.post<Support[]>(this.getTicketsById,jsonstr, this.auth.httpOptions);
  }    
  removeTickets(sup: Support) {
    let jsonstr = JSON.stringify(sup);
    return this.http.post(this.removerSupport,jsonstr,this.auth.httpOptions);
  }
  updateTicketStatus(sup: Support){
    let jsonstr = JSON.stringify(sup);
    return this.http.put(this.support,jsonstr,this.auth.httpOptions);
  }
}
