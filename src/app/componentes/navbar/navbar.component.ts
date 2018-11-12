import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { auth } from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public islogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor( public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if (auth){
      console.log("::: " + auth)
      this.nombreUsuario =auth.displayName;
      this.emailUsuario=auth.email;
      this.fotoUsuario=auth.photoURL;
    } else {
      this.islogin =false;
    }
    });
  }

  onClickLogout(){
    this,this.authService.logout()
  }
}