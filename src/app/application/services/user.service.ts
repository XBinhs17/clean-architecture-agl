import { Injectable, signal, inject, Signal } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user-repository";
import { toSignal } from "@angular/core/rxjs-interop";
import { IUserService } from "./user-service.interface";
import { Sign } from "crypto";
import { User } from "../../domain/models/user.model";
import { Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class UserService implements IUserService{

  private userRepository = inject(UserRepository)

  //hiện đang dùng toSignal để lấy toàn bộ user 1 lần duy nhất và biến nó thành 1 signal
  // users = toSignal(this.userRepository.getUsers(), { initialValue: [] });

  // getUsersSignal(): Signal<User[]> {
  //   return this.users;
  // }

  //xử lý logic cho load more
  private _users = signal<User[]>([]);
  readonly users = this._users.asReadonly();

  private currentPage = 1;
  private limit = 100;

  getUsersSignal(): Signal<User[]> {
    return this.users;
  }

  loadMore(): void{
    this.userRepository.getUsers(this.currentPage, this.limit).subscribe((newUsers) =>{
      this._users.set([...this._users(), ...newUsers]);
      this.currentPage++;
    })
  }

  //them unsub

}
