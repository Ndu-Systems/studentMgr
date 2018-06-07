import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  buyamount;
  duration ;
  sellamount;
  mutaurity;

  constructor() { }

  ngOnInit() {
  }
calculate(){
  console.log(this.duration);
  console.log(this.buyamount);
this.sellamount =this.GetSellAmount(this.buyamount,this.duration);
}
GetSellAmount(buy, months): number {
if(!buy){
  return 0;
}
if(!this.duration){
  return 0;
}

let sum = buy;
for(let i =1; i<= months; i++){
sum *=1.65;
}
return sum;
}
}
