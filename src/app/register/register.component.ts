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
            nome: [''],
            cognome: [''],
            email: [''],
            password: ['', [Validators.minLength(6)]],
            matricola: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
       // if (this.registerForm.invalid) {
        //    return;
        //}

        this.loading = true;
        this.userService.register(this.f.nome.value, this.f.cognome.value, this.f.mail.value,
            this.f.password.value, this.f.matricola.value).subscribe(
                res => {
                    this.alertService.success('Registrazione effettuata', true);
                    this.loading = false;
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error('error');
                    this.loading = false;
                });
    }
}
