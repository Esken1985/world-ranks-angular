import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})


export class TableItemComponent implements OnInit {

  countries: any = [];
  orderedCountries: any[] = [];
  direction: string = "asc";
  totalRecords: any;
  page: any = 1;
  
  constructor(private _countriesService: CountriesService) {
  }
  orderBy(countries: any[], direction: string){
    if(direction === "desc") {
      return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1));
    }
    if(direction === "asc") {
      return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1));
    }
    return countries
  };
  
  ngOnInit(): void {
    this._countriesService.getCountries()
    .subscribe(data => {
      this.countries = data
      this.totalRecords = data.length
      this.orderedCountries = this.orderBy(this.countries, "asc")
    });
    
  }

}
