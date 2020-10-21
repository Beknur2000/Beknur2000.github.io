import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f91700001000001dd9c350f780a48a288ebacc08b7e0a84'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelPhotoService {

  constructor(private http: HttpClient) { }

  getData(search:any): Observable<any>{
    console.log(search);
    const url="https://api.pexels.com/v1/search?query="+search+"&per_page="+10

    return this.http.get<any>(url,httpOptions).pipe(catchError(this.handleError))
  }
  handleError(error:any){
    return throwError(error.message || "Server error")


  }
}
