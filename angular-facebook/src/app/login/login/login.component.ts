import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStoreService } from '../../data-stores/auth-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private authStoreService: AuthStoreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    const { email, password } = this.loginForm.value;

    try {
      const userInfo = await this.authStoreService.login(email, password);

      

    } catch (error) {
      console.error(error);
      this.router.navigate(['core'])
    }
  }

}
