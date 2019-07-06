import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/services/accounts/account-service';
import { UserInfo } from 'src/services/accounts/user-info';
import { AlertService } from 'src/services/alert-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountServie: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.accountServie.login(new UserInfo("", "", this.f.username.value, this.f.password.value))
            .subscribe(
                data => {
                    this.accountServie.setUserToken(data.data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error("Incorrect Username/Password. Please try again");
                    this.loading = false;
                });
    }
}
