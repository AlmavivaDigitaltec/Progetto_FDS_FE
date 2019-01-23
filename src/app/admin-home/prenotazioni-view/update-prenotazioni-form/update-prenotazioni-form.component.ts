import { Component, OnInit } from '@angular/core';
import { Prenotazione } from 'src/app/_models/Prenotazione';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PrenotazioneService } from 'src/app/_services/prenotazione.service';
import { AlertService } from 'src/app/_services';
import { PrenotazioniViewComponent } from '../prenotazioni-view.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-prenotazioni-form',
  templateUrl: './update-prenotazioni-form.component.html',
  styleUrls: ['./update-prenotazioni-form.component.css']
})
export class UpdatePrenotazioniFormComponent implements OnInit {

  prenotazione: Prenotazione;
  updatePrenotazioneForm: FormGroup;
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

    this.prenotazione = JSON.parse(this.dataRoute.snapshot.params['prenotazione']);

    this.updatePrenotazioneForm = this.formBuilder.group({
      id_p: [this.prenotazione.id_p, [Validators.required, Validators.maxLength(4)]],
      matricola: [this.prenotazione.matricola, [Validators.required, Validators.maxLength(4)]],
      codice: [this.prenotazione.codice, [Validators.required, Validators.maxLength(4)]],
      data: [this.prenotazione.data, [Validators.required, Validators.maxLength(30)]],
      ora_inizio: [this.prenotazione.ora_inizio, [Validators.required, Validators.maxLength(20)]],
      ora_fine: [this.prenotazione.ora_fine, [Validators.required, Validators.maxLength(20)]]
     });
  }

  get f() { return this.updatePrenotazioneForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updatePrenotazioneForm.invalid) {
        this.alertService.getMessage();
        return;
    }
    
    this.loading = true;
    this.prenotazioneService.update(this.updatePrenotazioneForm.value).pipe(first())
        .subscribe(
            user => {
                this.alertService.success('Salvataggio effettuato!', true);
                this.router.navigate(['adminHome/prenotazioni']);
                this.prenotazioneViewComponent.loadAllPrenotazioni();
            },
            error => {
                this.alertService.error("Errore modifica");
                this.loading = false;
            });
  }



}
