import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsLogin, IUser } from '../../services/is-login';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  form: FormGroup;

  constructor(private router: Router, private isLogin: IsLogin) {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      role: new FormControl('user', Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data = this.form.value as IUser;
    this.isLogin.checkUsername(data.name).subscribe(exists => {
      if (exists) {
        alert('Username already exists');
        return;
      }
      this.isLogin.register(data).subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => alert('Signup failed')
      });
    });
  }
}
