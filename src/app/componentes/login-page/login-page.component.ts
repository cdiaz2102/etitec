import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flasMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/privado']);
      }).catch(err => console.log(err.message));
  }
}
