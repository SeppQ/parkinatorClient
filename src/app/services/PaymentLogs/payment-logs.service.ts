import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { PaymentLogs } from 'src/app/DTO/PaymentLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentLogsService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  PaymentLogsUrl: string = this.auth.url + "PaymentLogs";



  recordPaymentLogs(pl: PaymentLogs) {
    let jsonstr = JSON.stringify(pl);
    console.log(jsonstr);
    return this.http.post(this.PaymentLogsUrl,jsonstr,this.auth.httpOptions);
  }

  getAllPaymentLogs(): Observable<PaymentLogs[]>{
    return this.http.get<PaymentLogs[]>(this.PaymentLogsUrl, this.auth.httpOptions);
  }    
}
