import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { PruebaService } from './prueba.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VALIDADOR';

  constructor(private prueba: PruebaService) {}


  ngOnInit() {
    this.prueba.prueba().subscribe({
      next: ((res: any) => res)
    })
  }

}
