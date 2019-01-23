import { Component, OnInit, Input } from '@angular/core';
import { Prenotabile } from 'src/app/_models/prenotabile';
import { AlertService } from 'src/app/_services';
import { PrenotabiliViewComponent } from '../prenotabili-view.component';
import { PrenotabileService } from 'src/app/_services/prenotabile.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dettagli-prenotabile, [app-dettagli-prenotabile]',
  templateUrl: './dettagli-prenotabile.component.html',
  styleUrls: ['./dettagli-prenotabile.component.css']
})
export class DettagliPrenotabileComponent implements OnInit {

  @Input() prenotabile: Prenotabile;
  loading = false;

  constructor(
    private prenotabileService: PrenotabileService,
    private router: Router,
    private alertService: AlertService,
    private prenotabileViewComponent: PrenotabiliViewComponent) { }

  ngOnInit() {
  }

  updatePrenotabile() {
    this.router.navigate(['adminHome/prenotabili/update', JSON.stringify(this.prenotabile)]);
  }

  deletePrenotabile() {
    this.loading = true;
    this.prenotabileService.delete(this.prenotabile).pipe(first())
      .subscribe(
          prenotabile => {
                  this.alertService.success('Cancellazione effettuata!', true);
                  this.router.navigate(['adminHome/prenotabili']);
                  this.prenotabileViewComponent.loadAllPrenotabili();

                });
    
  }

}
