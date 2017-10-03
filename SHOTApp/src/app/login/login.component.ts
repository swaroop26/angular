import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';
import { Router } from '@angular/router';
import { Constants } from '../common/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginData: any = {};  
  constants : any = Constants;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(loginData) :void {

    this.userService.login( this.loginData ).subscribe( response => {      
      console.info(response);      
      localStorage.setItem( 'user', JSON.stringify( response ) );
      this.router.navigateByUrl( '/home');
      
    });
  }

}
