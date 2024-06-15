import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  paginas = [
    {titulo: 'Inicio', path: 'inicio'},
    {titulo: 'Restaurantes', path:'restaurantes'},
    {titulo: 'Lugares de interes', path:'lugares'},
    {titulo: 'Eventos', path:'eventos'},
    {titulo: 'Actividades', path:'actividades'},
    {titulo: 'Nosotros', path: 'nosotros'}
  ]

  menuOpen = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
