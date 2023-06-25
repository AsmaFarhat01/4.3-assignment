import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '/moviedata/data'; // assuming this is the correct endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(newData: any): Observable<any> {
    // Updated the HTTP endpoint and added the new data to send
    return this.http.post<any>(`${this.apiUrl}/add`, newData);
  }
}
