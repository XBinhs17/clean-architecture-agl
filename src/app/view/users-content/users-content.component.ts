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

@Component({
  selector: 'user-content',
  standalone: true,
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.scss'],
  providers: [
    UserService,
    { provide: UserRepository, useClass: UserApiRepository },
  ],
  imports: [
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    UserCardComponent,
    PaginationComponent,
  ],
})
export class UsersContentComponent  implements OnInit  {
  selected1 = new FormControl('recently');
  selected2 = new FormControl('excel');

  private userService = inject(UserService);

  users = this.userService.users;
  currentPage = signal(1);
  itemsPerPage = 9;
  totalPages = computed(() => {
    return Math.ceil(this.users().length / this.itemsPerPage);
  });

  ngOnInit() {
    console.log('user:', this.users());
  }

  pagedUsers = computed(() => {
    const allUsers = this.users();
    const page = this.currentPage();
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return allUsers.slice(start, end);
  });

  onPageChange(page: number) {
    this.currentPage.set(page);
  }
}
