import { Component,OnInit } from '@angular/core';
import { HttpService} from './http.service';
import  { Curr }  from './currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
    curr:  Curr[]=[];
    constructor(private httpService: HttpService){}
        
  ngOnInit(){
    this.httpService.getData().subscribe({next:(data:any) => {
      this.curr = data.filter((item:any)=>{
        if(item.cc==="USD"||item.cc==="EUR"){
          return item
        }
      })
    }
    });
  }
}
