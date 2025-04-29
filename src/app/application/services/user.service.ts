import { Injectable, signal, inject } from "@angular/core";
import { UserRepository } from "../../domain/repositories/user-repository";
import { toSignal } from "@angular/core/rxjs-interop";


@Injectable({providedIn:'root'})
export class UserService{
  private userRepository = inject(UserRepository)

  users = toSignal(this.userRepository.getUsers(), { initialValue: [] });

  getUsers() {
    this.userRepository.getUsers();
  }
}
