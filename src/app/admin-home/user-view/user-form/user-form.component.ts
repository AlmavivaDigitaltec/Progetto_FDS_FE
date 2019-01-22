import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { UserViewComponent } from '../user-view.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    createUserForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private userViewComponent: UserViewComponent) {}

    ngOnInit() {
        this.createUserForm = this.formBuilder.group({
            matricola: ['', [Validators.required, Validators.maxLength(4)]],
            nome: ['', [Validators.required, Validators.maxLength(20)]],
            cognome: ['', [Validators.required, Validators.maxLength(20)]],
            mail: ['', [Validators.required, Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.maxLength(20)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.createUserForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createUserForm.invalid) {
            this.alertService.getMessage();
            return;
        }
        
        this.loading = true;
        this.userService.register(this.createUserForm.value).pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registrazione effettuata!', true);
                    this.router.navigate(['adminHome/utenti']);
                    this.userViewComponent.loadAllUsers();
                },
                error => {
                    this.alertService.error("Errore nella registrazione");
                    this.loading = false;
                });
    }
}
