import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imageslist',
  standalone: true,
  imports: [],
  templateUrl: './imageslist.component.html',
  styleUrl: './imageslist.component.css'
})
export class ImageslistComponent {

  @Input() username : string = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();

  images = [
    {
      id: 1,
      url: "https://picsum.photos/id/1/200/200",
      alt: 1
    },
    {
      id: 2,
      url: "https://picsum.photos/id/2/200/200",
      alt: 2
    }
  ]

  favImage(favUrl: string) {
    this.addFavoriteEvent.emit(favUrl)
  }
}
