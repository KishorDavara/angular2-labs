import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateComponent } from './template.component';
import { moduleRoutes } from './template.routes';
import { Bootstrap4FormsModule } from '../../shared/bootstrap4/forms';
import { ValidatorsModule } from '../../shared/validators';

@NgModule({
  imports: [
    moduleRoutes,
    CommonModule,
    FormsModule,
    Bootstrap4FormsModule,
    ValidatorsModule
  ],
  declarations: [ TemplateComponent ]
})
export class TemplateModule { }
