import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  P1="bonjour";
  methodeA(){return 5}
  P2:boolean =true;
  msg="";
  methodB(){
    this.msg="event binding"
  }
  P3="4SAE2";
  ngOnInit(): void {
    
  }
  
}
