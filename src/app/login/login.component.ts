﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    //returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            mail: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.authenticationService.login(this.f.mail.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(data == null)
                    {
                        this.loginForm = this.formBuilder.group({
                            mail: ['', Validators.required],
                            password: ['', Validators.required]
                        });
                    }
                    else if(JSON.parse(localStorage.getItem('currentUser')).matricola == '000')
                    {
                        //this.router.navigateByUrl('/adminHome');
                        alert('############' + '\n' + "#    ADMIN    #" + "\n" + '############');
                        this.router.navigate(['/adminHome']);
                    }
                    else
                    {
                        //this.router.navigate([this.returnUrl]);
                        alert('Utente loggato');
                        this.router.navigate(['/userHome']);
                    }                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
