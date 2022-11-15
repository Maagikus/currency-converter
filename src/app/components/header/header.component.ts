import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/currency.service';
import { ICurrency } from '../../models/currency';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [HttpService]
})
export class AppHeader implements OnInit {
	curr: ICurrency[] = [];
	loading = false
	constructor(private httpService: HttpService) { }

	ngOnInit() {
		this.loading = true
		this.httpService.getData().subscribe({
			next: (data: ICurrency[]) => {
				this.loading = true
				this.curr = data.filter((item: any) => {
					if (item.cc === "USD" || item.cc === "EUR") {
						return item
					}
				})
				this.loading = false
			}
		});
	}
}
