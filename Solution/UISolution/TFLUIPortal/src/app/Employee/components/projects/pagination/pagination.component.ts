import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  implements OnInit{

  num:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  pageSize =5;
  pageNumber=1;
 
  maxpages:number=0;
  num1:number[]=[]


  ngOnInit(): void {
    this.num1 =this.num.slice(0,this.pageSize );
    this.maxpages=this.num.length /this.pageSize
  }    
  
  


  onClickNext(){
    this.pageNumber=this.pageNumber+1;
    let statrtFrom=(this.pageNumber-1)*this.pageSize;
    this.num1 =this.num.slice(statrtFrom, (statrtFrom+this.pageSize) );
  }

  onClickPrevious(){
    this.pageNumber=this.pageNumber-1;
    let statrtFrom=(this.pageNumber-1)*this.pageSize;
    this.num1 =this.num.slice(statrtFrom, (statrtFrom+this.pageSize) );
  }
}
