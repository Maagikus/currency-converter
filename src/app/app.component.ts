import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/currency.service';
import { ICurrency } from './models/currency';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HttpService]
})
export class AppComponent { }
