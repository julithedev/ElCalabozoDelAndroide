import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { PrecioPipe } from './pipes/precio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoItemComponent,
    PrecioPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
