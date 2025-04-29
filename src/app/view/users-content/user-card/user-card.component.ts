import { Component, Input } from '@angular/core';
import { StatBoxComponent } from '../../../shared/components/stat-box/stat-box.component';
import { UserInfoComponent } from '../../../shared/components/user-info/user-info.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  imports:[
    UserInfoComponent,
    StatBoxComponent
  ]
})
export class UserCardComponent {
  @Input() user: any;
}
