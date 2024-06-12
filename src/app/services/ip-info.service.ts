import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {
  private apiUrl = 'https://ipinfo.io/json?token=YOUR_API_TOKEN'; 

  constructor(private http: HttpClient) { }

  getIpInfo(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
