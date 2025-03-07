import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isProfileHidden: boolean = true;
  isMenuHidden: boolean = true;


  openProfileMenu () {
    this.isProfileHidden = !this.isProfileHidden;
  }

  openMenu () {
    this.isMenuHidden = !this.isMenuHidden;
  }

}
