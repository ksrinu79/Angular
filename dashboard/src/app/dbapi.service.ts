import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbapiService {

  baseUri:string = 'http://54.185.233.133:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getTransData(id): Observable<any> {
    let url = `${this.baseUri}/readTrx/${id}`;
    console.log(url);
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),

      catchError(this.errorMgmt)
    )
    //return this.http.get(url);
  }



  updateTransData(id, data): Observable<any> {
    let url = `${this.baseUri}/saveTrx/${id}`;
    console.log("in update");
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Error handling
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
