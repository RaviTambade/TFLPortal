import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements  OnChanges {
 
   pageSize:number=10;
  @Input() OriginalArray:any[]=[]
  current: number = 1;
  total: number = 0;

  @Output() pagedData: EventEmitter<any[]> = new EventEmitter<any[]>();
  
 
  ngOnChanges(changes: SimpleChanges): void {
    let arr:any[]=changes['OriginalArray'].currentValue;
    this.total= Math.ceil(arr.length / this.pageSize);
    this.current=1;
    setTimeout(()=>this.pagedData.emit(this.paginate(this.current, this.pageSize)))
    // console.log("data change")
  }


  public onNext(){
   this.current = this.current + 1;
   this.pagedData.emit(this.paginate(this.current, this.pageSize));
  }

  public onPrevious() {
    this.current = this.current - 1;
    this.pagedData.emit(this.paginate(this.current, this.pageSize));
  }

  public paginate(current: number, pageSize: number): any[] {
    return [...this.OriginalArray.slice((current - 1) * pageSize).slice(0, pageSize)];
  }
}
