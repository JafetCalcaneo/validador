import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private urlPadron: string = environment._proxyProgramas;

  constructor(private http: HttpClient) { }

  prueba() {
    const url = this.urlPadron + '/programas/catalogo'
    return this.http.get(url).pipe(
      map((res: any) => console.log(res)),
      catchError((e: HttpErrorResponse) => throwError(() => console.error(e)))
    )
  }

}
