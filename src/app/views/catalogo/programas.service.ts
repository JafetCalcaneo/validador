import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  private urlProgramas = environment._proxyProgramas;

  constructor(private _http: HttpClient) { }


  getAllPrograms(): Observable<any> {
    const url = this.urlProgramas + '/programas/catalogo';
    return this._http.get(url).pipe(
      map((res: any) => res),
      catchError((err: any) => throwError(() => console.error(err)))
    )
  }


}
