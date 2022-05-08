import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JaratService} from "../../shared/services/jarat.service";
import {Jarat} from "../../shared/models/Jarat";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-jaratadd',
  templateUrl: './jaratadd.component.html',
  styleUrls: ['./jaratadd.component.css']
})
export class JarataddComponent implements OnInit {

  user?: User;
  isUserAdmin?: boolean;

  addJaratForm = this.createForm({
    id: '',
    jarmu: '',
    noMegallok: 0,
    start: '',
    end: ''
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private jaratService: JaratService,
              private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.isUserAdmin = this.user?.admin;
      if (!this.isUserAdmin) {
        this.router.navigateByUrl('/index');
      }
    });

  }

  createForm(model: Jarat) {
    let formGroup = this.fb.group(model);
    formGroup.get('id')?.addValidators([Validators.required]);
    formGroup.get('jarmu')?.addValidators([Validators.required]);
    formGroup.get('noMegallok')?.addValidators([Validators.required]);
    formGroup.get('start')?.addValidators([Validators.required]);
    formGroup.get('end')?.addValidators([Validators.required]);
    return formGroup;
  }

  addJarat() {
    if (this.addJaratForm.valid) {
      this.jaratService.create(this.addJaratForm.value).then(_ => {
        this.router.navigateByUrl('/menetrend');
      }).catch(error => {
        console.error(error);
      })
    }
  }
}
