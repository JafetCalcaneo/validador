import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { PruebaService } from './prueba.service';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { CatalogoComponent } from './views/catalogo/catalogo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatInputModule, NavbarComponent, RouterOutlet, CatalogoComponent],
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
