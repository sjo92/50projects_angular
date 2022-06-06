import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule, FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule, FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialModule {}