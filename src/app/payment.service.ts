import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createCardToken(cardDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/card/token`, cardDetails);
  }

  chargePayment(chargeDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/charge`, chargeDetails);
  }

  getStripeKey(): Observable<string> {
    return this.http.get(`${this.apiUrl}/key`, { responseType: 'text' });
  }
}
