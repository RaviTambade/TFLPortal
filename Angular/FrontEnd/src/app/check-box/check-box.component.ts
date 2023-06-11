import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  form: FormGroup;
  roles: any = [
    { id: 1, name: 'Manager' },
    { id: 1, name: 'User' },
    { id: 1, name: 'Admin' },
    { id: 1, name: 'Director' }
  ];

  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      role: this.formbuilder.array([], [Validators.required])
    })
  }
  ngOnInit(): void {

  }

  onCheckboxChange(e: any) {
    console.log("something is  Happened");
    const role: FormArray = this.form.get('role') as FormArray;
    if (e.target.checked) {
      role.push(new FormControl(e.target.value));
    } else {
      const index = role.controls.findIndex(x => x.value === e.target.value);
      role.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }



}
