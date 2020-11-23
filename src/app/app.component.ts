import {Component, OnInit} from '@angular/core';
import {CatalogService} from './catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  categories;


  constructor( private catService: CatalogService){}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.catService.getResource('/categories')
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err);
    });
  }
}
