import { Component, OnInit } from '@angular/core';
import { Prenotabile } from 'src/app/_models/prenotabile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { PrenotabileService } from 'src/app/_services/prenotabile.service';
import { PrenotabiliViewComponent } from '../prenotabili-view.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-prenotabile-form',
  templateUrl: './update-prenotabile-form.component.html',
  styleUrls: ['./update-prenotabile-form.component.css']
})
export class UpdatePrenotabileFormComponent implements OnInit {

  prenotabile: Prenotabile;
  updatePrenotabileForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataRoute: ActivatedRoute,
    private prenotabileService: PrenotabileService,
    private alertService: AlertService,
    private prenotabileViewComponent: PrenotabiliViewComponent) { }

  ngOnInit() {

    this.prenotabile = JSON.parse(this.dataRoute.snapshot.params['prenotabile']);

    this.updatePrenotabileForm = this.formBuilder.group({
      codice: [this.prenotabile.codice, [Validators.required, Validators.maxLength(4)]],
      nome: [this.prenotabile.nome, [Validators.required, Validators.maxLength(20)]],
      data_inizio: [this.prenotabile.data_inizio, [Validators.required, Validators.maxLength(20)]],
      data_fine: [this.prenotabile.data_fine, [Validators.required, Validators.maxLength(30)]],
      ora_inizio: [this.prenotabile.ora_inizio, [Validators.required, Validators.maxLength(20)]],
      ora_fine: [this.prenotabile.ora_fine, [Validators.required, Validators.maxLength(20)]]
     });
  }

  // convenience getter for easy access to form fields
  get f() { return this.updatePrenotabileForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.updatePrenotabileForm.invalid) {
          this.alertService.getMessage();
          return;
      }
      
      this.loading = true;
      this.prenotabileService.update(this.updatePrenotabileForm.value).pipe(first())
          .subscribe(
              user => {
                  this.alertService.success('Salvataggio effettuato!', true);
                  this.router.navigate(['adminHome/prenotabili']);
                  this.prenotabileViewComponent.loadAllPrenotabili();
              },
              error => {
                  this.alertService.error("Errore modifica");
                  this.loading = false;
              });
    }

}
