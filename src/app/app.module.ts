import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { IgxButtonGroupModule, IgxGridModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from './directive/prevent-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskDirective,
    IgxGridModule,
    IgxPreventDocumentScrollModule,
	  IgxButtonGroupModule
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    provideNgxMask()
  ],
})
export class AppModule {}
