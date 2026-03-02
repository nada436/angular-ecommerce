import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IsLogin } from '../../services/is-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userregisterform: FormGroup;

  constructor(private router: Router ,private IsLogin: IsLogin) {
    this.userregisterform = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  saveuser() {
    if (this.userregisterform.invalid) {
      this.userregisterform.markAllAsTouched();
      return;
    }

    const { name, password } = this.userregisterform.value;
    this.IsLogin.login({ name, password }).subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
