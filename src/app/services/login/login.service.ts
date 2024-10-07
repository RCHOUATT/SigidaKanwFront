import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const login = { username, password };
    return this.http.post<any>('http://localhost:8080/sigidaKanw/auth/login', login)
      .subscribe(response => {
        // Stocker le token JWT dans le localStorage
        localStorage.setItem('token', response.token);
      });
  }

}
