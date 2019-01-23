import { Component, OnInit } from '@angular/core';
import { Prenotazione } from 'src/app/_models/Prenotazione';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PrenotazioneService } from 'src/app/_services/prenotazione.service';
import { AlertService } from 'src/app/_services';
import { PrenotazioniViewComponent } from 'src/app/admin-home/prenotazioni-view/prenotazioni-view.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-prenotazioni-form',
  templateUrl: './prenotazioni-form.component.html',
  styleUrls: ['./prenotazioni-form.component.css']
})
export class PrenotazioniFormComponent implements OnInit {

  prenotazione: Prenotazione;
  createPrenotazioneForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataRoute: ActivatedRoute,
    private prenotazioneService: PrenotazioneService,
    private alertService: AlertService,
    private prenotazioneViewComponent: PrenotazioniViewComponent) { }

  ngOnInit() {

    this.createPrenotazioneForm = this.formBuilder.group({
      id_p: ['', [Validators.required, Validators.maxLength(4)]],
      matricola: ['', [Validators.required, Validators.maxLength(4)]],
      codice: ['', [Validators.required, Validators.maxLength(4)]],
      data: ['', [Validators.required, Validators.maxLength(30)]],
      ora_inizio: ['', [Validators.required, Validators.maxLength(20)]],
      ora_fine: ['', [Validators.required, Validators.maxLength(20)]]
     });
  }

  get f() { return this.createPrenotazioneForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createPrenotazioneForm.invalid) {
        this.alertService.getMessage();
        return;
    }
    
    this.loading = true;
    this.prenotazioneService.register(this.createPrenotazioneForm.value).pipe(first())
        .subscribe(
            user => {
                this.alertService.success('Salvataggio effettuato!', true);
                this.router.navigate(['userHome']);
                this.prenotazioneViewComponent.loadAllPrenotazioni();
            },
            error => {
                this.alertService.error("Errore modifica");
                this.loading = false;
            });
  }

}
