import { Component, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-file-down-load',
  templateUrl: './file-down-load.component.html',
  styleUrls: ['./file-down-load.component.css']
})
export class FileDownLoadComponent implements OnInit{


  constructor(private wmgmt:WorkmgmtService){}
  ngOnInit(): void {
    
  }

  onClick(){
    this.wmgmt.fileDownload();
  }
}
