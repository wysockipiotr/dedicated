import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatRippleModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatSidenavModule,
  MatDialogModule,
  MatSlideToggleModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatIconModule,
  MatRippleModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  imports: [...MATERIAL_MODULES, CommonModule, HttpClientModule],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule {}
