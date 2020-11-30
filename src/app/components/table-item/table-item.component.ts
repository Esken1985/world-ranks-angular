import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  countries: any = [];
  totalRecords: any;
  page: any = 1;

  constructor(private _countriesService: CountriesService) { }

  

  ngOnInit(): void {
    this._countriesService.getCountries()
        .subscribe(data => {
          this.countries = data
          this.totalRecords = 250
        });
  }

}
