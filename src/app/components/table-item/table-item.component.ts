import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  public countries: any = [];

  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
    this._countriesService.getCountries()
        .subscribe(data => {
          this.countries = data
          console.log(this.countries)
        });
  }

}
