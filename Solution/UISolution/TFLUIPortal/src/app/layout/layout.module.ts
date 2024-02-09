import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main} from './Components/main/main';
import { RouterModule } from '@angular/router';
import { Home } from './Components/home/home';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    Main,
    Home,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [Main,Home],
})
export class LayoutModule {}
