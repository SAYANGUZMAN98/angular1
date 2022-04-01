import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
//import { ProductsCreateComponent } from 'src/products/products-create/products-create.component';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProductsServices{
    httpOptions={
        
    }
    constructor(private http:HttpClient){
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
                'If-Modified-Since': '0'
            })
        }
    }
    createProduct(create: any) : Observable<any> {
        return this.http.post<any>(`http://192.168.1.17:8080/api/productos`, create , this.httpOptions)
            .pipe(catchError(this.handleError));
    }
    editProduct(edit: any) : Observable<any> {
        return this.http.put<any>(`http://192.168.1.17:8080/api/productos/<idProducto>`, edit , this.httpOptions)
            .pipe(catchError(this.handleError));
    }
    listProduct(){
        return this.http.get(`http://192.168.1.17:8080/api/tiposProductos `,this.httpOptions).pipe(
          catchError(this.handleError)
        );
    }
    deleteProduct(idProducto: any): Observable<any> {
        return this.http.delete(`http://192.168.1.17:8080/api/productos/${idProducto}`, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

      

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened. Please try again later.');
    }


}