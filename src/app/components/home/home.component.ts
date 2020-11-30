import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  countries: any = [];
  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
    this._countriesService.getCountries()
        .subscribe(data => {
          this.countries = data
        });
  }
}
