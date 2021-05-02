import { Component } from '@angular/core';
import { Modelos } from './model/modelos.model';
import { AuthFirebaseService } from './services/auth-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Firebase';
  base: unknown[];
  UserLogin: Modelos;
  constructor(private dataBase: AuthFirebaseService) {}

  usuarios() {
    this.dataBase.getAll().subscribe((data) => {
      this.base = data;
      console.log(this.base);
    });
  }

  login() {
    this.dataBase.login().then((data) => {

      this.UserLogin = {
        photoURL: data.user.photoURL,
        displayName: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      };

      console.log(data);
    });
  }
}
