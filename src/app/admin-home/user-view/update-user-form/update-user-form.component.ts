import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, AlertService } from 'src/app/_services';
import { UserViewComponent } from '../user-view.component';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {

    user: User;
    updateUserForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private dataRoute: ActivatedRoute,
        private userService: UserService,
        private alertService: AlertService,
        private userViewComponent: UserViewComponent) {}

    ngOnInit() {
        
        this.user = JSON.parse(this.dataRoute.snapshot.params['utente']);

        this.updateUserForm = this.formBuilder.group({
            matricola: [this.user.matricola, [Validators.required, Validators.maxLength(4)]],
            nome: [this.user.nome, [Validators.required, Validators.maxLength(20)]],
            cognome: [this.user.cognome, [Validators.required, Validators.maxLength(20)]],
            mail: [this.user.mail, [Validators.required, Validators.maxLength(30)]],
            password: [this.user.password, [Validators.required, Validators.maxLength(20)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.updateUserForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateUserForm.invalid) {
            this.alertService.getMessage();
            return;
        }
        
        this.loading = true;
        this.userService.update(this.updateUserForm.value).pipe(first())
            .subscribe(
                user => {
                    this.alertService.success('Salvataggio effettuato!', true);
                    this.router.navigate(['adminHome/utenti']);
                    this.userViewComponent.loadAllUsers();
                },
                error => {
                    this.alertService.error("Errore modifica");
                    this.loading = false;
                });
      }
}
