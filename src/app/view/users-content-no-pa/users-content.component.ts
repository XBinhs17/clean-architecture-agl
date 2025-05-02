import { Component, OnInit, effect, computed, signal, Signal, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { User } from '../../domain/models/user.model';
import { UserService } from '../../application/services/user.service';
import { UserRepository } from '../../domain/repositories/user-repository';
import { UserApiRepository } from '../../infrastructure/repositories/user-api.reponsitory';
import { IUserService } from '../../application/services/user-service.interface';

@Component({
  selector: 'user-content',
  standalone: true,
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.scss'],
  providers: [
    { provide: UserRepository, useClass: UserApiRepository },
    { provide: IUserService, useClass: UserService },

  ],
  imports: [
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    UserCardComponent,
  ],
})
export class UsersContentNoComponent  implements OnInit  {
  selected1 = new FormControl('recently');
  selected2 = new FormControl('excel');

  private userService = inject(IUserService);

  users = this.userService.getUsersSignal();

  ngOnInit() {
    console.log('user:', this.users());
    this.userService.loadMore();
  }

  loadMoreUsers() {
    this.userService.loadMore();
  }

}
