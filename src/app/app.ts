
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loadingService = inject(LoadingService);
}
