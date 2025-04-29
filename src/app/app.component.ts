import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/components/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clean-architeture';
}
