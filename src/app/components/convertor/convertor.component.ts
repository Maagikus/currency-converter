import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/currency.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICurrency } from 'src/app/models/currency';

@Component({
	selector: 'app-converter',
	templateUrl: './convertor.component.html',
	styleUrls: ['./convertor.component.css'],
	providers: [HttpService]
})
export class AppConvertor implements OnInit {

	curr: ICurrency[] = [];
	index: number = 0
	loading = false
	myForm: FormGroup = new FormGroup({
		fromValue: new FormControl(''),
		toValue: new FormControl(''),
		from: new FormControl('USD'),
		to: new FormControl('EUR'),
	})
	constructor(private httpService: HttpService) { }
	changeValues(event: Event) {
		const target = event.target as HTMLButtonElement;
		let fromCurr = this.curr.filter((item) => item.cc === this.myForm.value.from)
		let toCurr = this.curr.filter((item) => item.cc === this.myForm.value.to)
		switch (true) {
			case target.dataset['type'] === 'toValue':
				this.index = toCurr[0].rate / fromCurr[0].rate
				this.myForm.value.fromValue = (this.myForm.value.toValue * this.index).toFixed(2)
				break
			case target.dataset['type'] === 'fromValue':
				this.index = fromCurr[0].rate / toCurr[0].rate
				this.myForm.value.toValue = (this.myForm.value.fromValue * this.index).toFixed(2)
				break
			case target.dataset['type'] === 'currency':
				this.index = fromCurr[0].rate / toCurr[0].rate
				this.myForm.value.toValue = (this.myForm.value.fromValue * this.index).toFixed(2)
				break
		}
	}
	onChange(event: Event) {
		this.changeValues(event)
	}
	ngOnInit(): void {
		this.loading = true
		this.httpService.getData().subscribe({
			next: (data: ICurrency[]) => {
				this.curr = data
				this.loading = false
			}
		});
	}
}