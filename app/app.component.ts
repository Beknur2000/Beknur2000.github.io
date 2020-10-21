import { Component } from '@angular/core';
import {PexelPhotoService} from './services/pexel-photo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search';

  search: String[]
  data:any[]
  
  constructor(private pexelService:PexelPhotoService) {
    this.pexelService.getData(this.search)
  }

  searchPhotos() {
    this.pexelService.getData(this.search).subscribe((data:any) => {
      console.log(data);
      this.data = data.photos;
    }, (error) => {
      console.log(error);
    });
  }
  
}
