import { Injectable } from '@angular/core';
import {SignInPayload} from "../data/payload";
import {Observable, of} from "rxjs";
import {SignupPayload} from "../data/payload/sign-up.payload";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  public signIn(payload:SignInPayload):Observable<any>{
    return of(payload)
  }
  public signUp(payload:SignupPayload):Observable<any>{
    return of(null)
  }
  public me():Observable<any>{
    return of(null)
  }



}
