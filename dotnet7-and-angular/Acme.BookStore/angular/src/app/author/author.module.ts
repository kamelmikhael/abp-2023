import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorRoutingModule,
    NgbDatepickerModule,
  ]
})
export class AuthorModule { }
