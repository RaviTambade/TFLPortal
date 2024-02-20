import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from './components/user-profile/user-profile';
import { UpdateProfile } from './components/update-profile/update-profile.';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfile, UpdateProfile],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserProfile],
})
export class PersonaliztionModule {}
