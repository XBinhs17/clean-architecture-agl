import { Observable } from "rxjs";
import { User } from "../models/user.model";

export abstract class UserRepository {
  //logic cũ dùng cho toSignal
  // abstract getUsers(): Observable<User[]>;

  //xử lý logic cho load more
  abstract getUsers(page: number, limit: number): Observable<User[]>;
}
