import { Injectable } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user-repository";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { User } from "../../domain/models/user.model";


@Injectable({
  providedIn: 'root',
})
export class UserApiRepository implements UserRepository{
  private apiUrl = 'assets/data/data-users.json';

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<User[]> {
  //     return this.http.get<User[]>(this.apiUrl);
  // }

  //xử lý logic cho load more
  getUsers(page: number, limit: number): Observable<User[]>{
   return this.http.get<User[]>(this.apiUrl).pipe(
    map(users =>{
      const start = (page - 1) * limit;
      const end = start + limit;
      return users.slice(start, end);
    })
   )
  }
}
