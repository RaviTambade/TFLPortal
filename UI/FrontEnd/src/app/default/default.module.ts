import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PrivacyComponent
  ]
})
export class DefaultModule { }
