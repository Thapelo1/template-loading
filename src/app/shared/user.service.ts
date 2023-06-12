import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "./interfaces/user.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }
}
