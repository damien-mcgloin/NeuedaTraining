import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stocktrading } from '../shared/stocktrading';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://stocktrading-stocktrading.emeadocker24.conygre.com:80/api/v1/Trader/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method
  getStocktradings(): Observable<Stocktrading> {
    return this.http.get<Stocktrading>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method
  getStocktrading(id:any): Observable<Stocktrading> {
    return this.http.get<Stocktrading>(this.apiURL + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method
  createStocktrading(stocktrading:Stocktrading): Observable<Stocktrading> {
    return this.http.post<Stocktrading>(this.apiURL + '', JSON.stringify(stocktrading), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method
  updateStocktrading(id:number, stocktrading:Stocktrading): Observable<Stocktrading> {
    return this.http.put<Stocktrading>(this.apiURL + '', JSON.stringify(stocktrading), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method
  deleteStocktrading(id:number){
    return this.http.delete<Stocktrading>(this.apiURL + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
