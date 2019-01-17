import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            matricola: ['', [Validators.required, Validators.maxLength(4)]],
            nome: ['', [Validators.required, Validators.maxLength(20)]],
            cognome: ['', [Validators.required, Validators.maxLength(20)]],
            mail: ['', [Validators.required, Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.maxLength(20)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.alertService.getMessage();
            return;
        }
        
        this.loading = true;
        this.userService.register(this.registerForm.value).pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registrazione effettuata!', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error("Errore nella registrazione");
                    this.loading = false;
                });
    }
}
