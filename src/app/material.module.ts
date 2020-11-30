import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


const MaterialComponents: any = [
  MatIconModule, 
  MatPaginatorModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
