import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador = 0;

  sumarContador() {
    this.contador = this.contador + 1;
  }

  restarContador() {
    this.contador = this.contador - 1;
  }
}
