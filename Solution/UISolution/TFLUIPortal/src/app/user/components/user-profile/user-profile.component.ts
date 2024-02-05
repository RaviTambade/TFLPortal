import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/Models/User';
import { HrService } from 'src/app/shared/services/hr.service';
import { MembershipService } from 'src/app/shared/services/membership.service';
import { environment } from 'src/environments/environment';
import { StateChangeEvent } from '../../Models/stateChangeEvent';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User | undefined;
  userId: number | undefined;
  imageServer = environment.imagerServerUrl;
  selectedFile: File | undefined;
  selectedImageUrl: string | undefined;
  defaultImage: string = 'AkshayTanpure.jpg';
  updateProfileStatus: boolean = false;

  constructor(
    private hrsvc: HrService,
    private membershipsvc: MembershipService,
    private route: ActivatedRoute,
    private jwtSvc: JwtService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userId = Number(this.jwtSvc.getClaimFromToken(TokenClaims.userId));
    this.membershipsvc.getUser(this.userId).subscribe((res) => {
      this.user = res;
      console.log(res);
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile)
      this.selectedImageUrl = URL.createObjectURL(this.selectedFile);
  }

  confirmImage() {
    if (this.user == undefined) {
      return;
    }
    if (this.selectedFile) {
      const formData = new FormData();
      let newImageUrl: string =
        crypto.randomUUID() + '.' + this.selectedFile.name.split('.').pop();

      formData.append('file', this.selectedFile, newImageUrl);

      this.membershipsvc.uploadFile(newImageUrl, formData).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log('finished');
            if (this.user) {
              let obj: User = {
                id: this.user.id,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                birthDate: this.user.birthDate,
                aadharId: this.user.aadharId,
                imageUrl: newImageUrl,
                gender: this.user.gender,
                email: this.user.email,
                contactNumber: this.user.contactNumber,
              };
              this.membershipsvc
                .updateUser(obj.id, obj)
                .subscribe((response) => {
                  if (this.user) this.user.imageUrl = newImageUrl;
                });
            }
          }
        },
      });

      this.selectedFile = undefined;
      this.selectedImageUrl = undefined;
    }
  }
  cancelImage() {
    this.selectedFile = undefined;
    this.selectedImageUrl = undefined;
  }
  onClickUpdateProfile() {
    this.updateProfileStatus = true;
  }

  closeEditUserComponent(event: StateChangeEvent) {
    this.updateProfileStatus = false;
    if (event.isStateUpdated) {
      this.getUser();
    }
  }
}
