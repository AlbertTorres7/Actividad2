import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { IndiceComponent } from './indice/indice.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TituloComponent,IndiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad2';
}
