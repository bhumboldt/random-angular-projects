import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
