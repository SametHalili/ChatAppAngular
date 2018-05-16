import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Gebruiker } from '../gebruiker';
import { GebruikerService } from '../gebruiker.service';

@Component({
  selector: 'app-show-gebruiker',
  templateUrl: './show-gebruiker.component.html',
  styleUrls: ['./show-gebruiker.component.css']
})
export class ShowGebruikerComponent implements OnInit {
  @Input() gebruiker: Gebruiker;

  constructor(
    private route: ActivatedRoute,
    private gebruikerService: GebruikerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGebruiker();
  }

  getGebruiker(): void {
    const userId = this.route.snapshot.paramMap.get('username');
    this.gebruikerService.getGebruiker(userId)
      .subscribe(gebruiker => this.gebruiker = gebruiker);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.gebruikerService.updateGebruiker(this.gebruiker)
      .subscribe(() => this.goBack());
  }

}
