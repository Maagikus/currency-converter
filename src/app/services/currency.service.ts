import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrency } from '../models/currency';

@Injectable()
export class HttpService {
	constructor(private http: HttpClient) { }
	getData(): Observable<ICurrency[]> {
		return this.http.get<ICurrency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
	}
}