import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyservicesService {
  url = 'http://localhost:3000/Datalist';
  constructor(private http: HttpClient) {}

  GetData(): Observable<any> {
    return this.http.get(this.url);
  }

  Postdata(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  DelData(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  GetDataById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  UpdateData(id:number,value:any) {
    return this.http.put(`${this.url}/${id}`,value);
  }
}
