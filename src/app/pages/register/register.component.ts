import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup( {
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup( {
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }),
    admin: new FormControl('')
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.registerForm.get('email')?.value,
        username: this.registerForm.get('email')?.value.split('@')[0],
        name: {
          firstname: this.registerForm.get('name.firstname')?.value,
          lastname: this.registerForm.get('name.lastname')?.value
        },
        admin: false
      };
      this.userService.create(user).then(_ => {
        console.log('User added');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
