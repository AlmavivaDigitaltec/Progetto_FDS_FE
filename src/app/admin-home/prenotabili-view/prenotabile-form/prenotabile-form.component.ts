import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-prenotabile-form',
  templateUrl: './prenotabile-form.component.html',
  styleUrls: ['./prenotabile-form.component.css']
})
export class PrenotabileFormComponent implements OnInit {

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
                    this.alertService.success('Prenotabile creato', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error("Errore nella creazione del prenotabile");
                    this.loading = false;
                });
    }

}
