import { Component } from '@angular/core';
import { ImageslistComponent } from '../imageslist/imageslist.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ImageslistComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "jane doe";
  profile = "https://i.pinimg.com/236x/50/50/2a/50502a03e3e14c4ace72048016bdd68d.jpg";
  isLoggedIn = false;
  favImage = "";

  getFavorite(favUrl : string) {
    this.favImage = favUrl;
  }

  great() {
    alert("hola");
  }

  loggin() {
    this.isLoggedIn = true;
  }

  desloggin() {
    this.isLoggedIn = false;
  }
}
