import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    DragDropModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
