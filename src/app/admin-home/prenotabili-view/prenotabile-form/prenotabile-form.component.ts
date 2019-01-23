import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { PrenotabileService } from 'src/app/_services/prenotabile.service';
import { PrenotabiliViewComponent } from '../prenotabili-view.component';

@Component({
  selector: 'app-prenotabile-form',
  templateUrl: './prenotabile-form.component.html',
  styleUrls: ['./prenotabile-form.component.css']
})
export class PrenotabileFormComponent implements OnInit {

    createPrenotabileForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private prenotabileService: PrenotabileService,
        private alertService: AlertService,
        private prenotabileViewComponent: PrenotabiliViewComponent) { }

    ngOnInit() {
        this.createPrenotabileForm = this.formBuilder.group({
            codice: ['', [Validators.required, Validators.maxLength(4)]],
            nome: ['', [Validators.required, Validators.maxLength(20)]],
            data_inizio: ['', [Validators.required, Validators.maxLength(20)]],
            data_fine: ['', [Validators.required, Validators.maxLength(30)]],
            ora_inizio: ['', [Validators.required, Validators.maxLength(20)]],
            ora_fine: ['', [Validators.required, Validators.maxLength(20)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.createPrenotabileForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createPrenotabileForm.invalid) {
            this.alertService.getMessage();
            return;
        }
        
        this.loading = true;
        this.prenotabileService.register(this.createPrenotabileForm.value).pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Prenotabile creato', true);
                    this.router.navigate(['/adminHome/prenotabili']);
                    this.prenotabileViewComponent.loadAllPrenotabili();
                },
                error => {
                    this.alertService.error("Errore nella creazione del prenotabile");
                    this.loading = false;
                });
    }

}
