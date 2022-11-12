import { Component,OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import  { Curr }  from '../currency';

@Component({
  selector: 'app-converter',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
  providers: [HttpService]
})
export class AppConvertor implements OnInit{
    constructor(private httpService: HttpService){}
    curr:  Curr[]=[];
    currencyForm: any = {
    from: '',
    to: '',
    valueFrom:null,
    valueTo:null,
    index:null
  }
  fromTo(){
    let fromCurr = this.curr.filter((item:any) =>item.cc === this.currencyForm.from)
    let toCurr = this.curr.filter((item:any) =>item.cc === this.currencyForm.to)
    this.currencyForm.index = fromCurr[0].rate / toCurr[0].rate
    this.currencyForm.valueTo = (this.currencyForm.valueFrom * this.currencyForm.index).toFixed(2)
  }
  toFrom(event:any){
    let fromCurr = this.curr.filter((item:any) =>item.cc === this.currencyForm.from)
    let toCurr = this.curr.filter((item:any) =>item.cc === this.currencyForm.to)
    this.currencyForm.index = toCurr[0].rate / fromCurr[0].rate
    this.currencyForm.valueFrom = (this.currencyForm.index * event.target.value).toFixed(2)
  }
  onInput(event:any){
    switch(true){
      case event.target.dataset.type === 'to':
          this.toFrom(event)
        break
      case event.target.dataset.type === 'from':
          this.fromTo()
        break
    }
  }
  ngOnInit(){
          this.httpService.getData().subscribe({next:(data:any) => this.curr = data});
      }
}
