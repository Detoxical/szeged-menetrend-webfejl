import {Component, Input, OnInit} from '@angular/core';
import {Jarat} from "../../shared/models/Jarat";
import {JaratService} from "../../shared/services/jarat.service";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-menetrend',
  templateUrl: './menetrend.component.html',
  styleUrls: ['./menetrend.component.css']
})
export class MenetrendComponent implements OnInit {

  displayedColumns: string[] = ['id', 'jarmu', 'noMegallok', 'start', 'end'];
  jaratObject?: Array<Jarat>;
  user?: User;
  isUserAdmin?: boolean;


  constructor(private jaratService: JaratService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.jaratService.loadJarat().subscribe((data: Array<Jarat>) => {
      console.log(data);
      this.jaratObject = data;
    })

    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.isUserAdmin = this.user?.admin;
    });
  }

  delJarat(id: string) {
    this.jaratService.delete(id).then(_ => {
      this.router.navigateByUrl('/menetrend');
    }).catch(error => {
      console.error(error);
    })
  }
}
