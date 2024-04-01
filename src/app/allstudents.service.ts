import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllstudentsService {

  constructor(private _httpClient: HttpClient) { }
  allstudentsdata(): Observable<any> {
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students");
  }


   filter(term:string): Observable<any> {
  return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?filter=" + term);

  }
  getpagedstudents(pageNo:number):Observable<any>{
  return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?limit=5&page=" + pageNo);

  }
  getsortstudents(column:string , order:string):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?sortBy="+column+"&order="+order);
  }
  deletedstudents(id: String): Observable<any> {
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+ id)
}
}
