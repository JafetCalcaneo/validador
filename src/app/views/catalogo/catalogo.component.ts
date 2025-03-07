import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProgramasService } from './programas.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-catalogo',
  imports: [MatTableModule, MatCardModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  programas: any = [];
  displayedColumns: string[] = ['id', 'nombre'];


  constructor(private programasService: ProgramasService){}


  ngOnInit() {
    this.getPrograms();
  }

  getPrograms() {
    this.programasService.getAllPrograms().subscribe({
      next: ((res: any) => this.programas = res),
      error: ((error: any) => console.log(error))
    })
  }

}
