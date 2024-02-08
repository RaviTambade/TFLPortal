import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent, UpdateProfileComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserProfileModule {}
