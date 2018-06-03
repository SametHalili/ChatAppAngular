import { Component, OnInit } from '@angular/core';
import {GebruikerService} from '../gebruiker.service';
import {Gebruiker} from '../gebruiker';
import { timer } from 'rxjs';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {
  gebruikers: Gebruiker[];

  constructor(private gebruikerService: GebruikerService) { }

  ngOnInit() {
    this.getGebruikers();
  }


  getGebruikers(): void {
    timer(0, 2500)
      .subscribe(() => this.gebruikerService.getGebruikers()
        .subscribe(
          gebruikers => this.gebruikers = gebruikers,
          err => console.error(err),
          () => console.log('done loading json')));
  }
}
