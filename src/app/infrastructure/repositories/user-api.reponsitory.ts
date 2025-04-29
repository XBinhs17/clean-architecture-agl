import { Injectable } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user-repository";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../domain/models/user.model";


@Injectable({
  providedIn: 'root',
})
export class UserApiRepository implements UserRepository{
  private apiUrl = 'assets/data/data-users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
  }
}
