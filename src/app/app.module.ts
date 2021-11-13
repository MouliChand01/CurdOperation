import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { MyservicesService } from './myservices.service';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewdataComponent,
    AddemployeeComponent,
    DisplaydataComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
