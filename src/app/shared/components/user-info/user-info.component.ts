import { Component, input, Input } from "@angular/core";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
  imports: [
    AvatarComponent
  ]
})
export class UserInfoComponent{
  avatar= input<string>('');
  name = input<string>('');
  work = input<string>('');
  avatarSize = input<number>(25);

}
