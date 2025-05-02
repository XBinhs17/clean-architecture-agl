import { Signal } from "@angular/core";
import { User } from "../../domain/models/user.model";

export abstract class IUserService{
  abstract getUsersSignal(): Signal<User[]>;
  abstract readonly users: Signal<User[]>
  abstract loadMore(): void;
}
