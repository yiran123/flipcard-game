import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GameCardComponent } from './game-card/game-card.component';
import { MainComponent } from './main/main.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  declarations: [
    AppComponent,
    GameCardComponent,
    MainComponent,
    RestartDialogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
