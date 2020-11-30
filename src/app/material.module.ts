import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from "@angular/material/progress-bar"


const MaterialComponents: any = [
  MatIconModule, 
  MatProgressBarModule
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
