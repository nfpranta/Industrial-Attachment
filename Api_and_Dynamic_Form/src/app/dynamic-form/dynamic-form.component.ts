import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  dynamicForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      users: this.fb.array([]),
    });
  }

  addUser() {
    const userControl = this.fb.group({
      email: [''],
    });
    this.users.push(userControl);
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }
  submit(index: number) {}

  get users() {
    return this.dynamicForm.get('users') as FormArray;
  }
}
