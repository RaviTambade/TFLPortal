import { Component, OnInit, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HrService } from './shared/services/Staffing/hr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private hrSvc: HrService) {}
  getFile() {
    let url = 'http://localhost:5263/Documents/DadabhauNavle18122023130430.pdf';
    this.downloadFile(url);
  }

  downloadFile(url: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe((response: any) => {
      let blob = new Blob([response], { type: 'application/pdf' });
      let pdfUrl = window.URL.createObjectURL(blob);

      var PDF_link = document.createElement('a');
      PDF_link.href = pdfUrl;
      //   TO OPEN PDF ON BROWSER IN NEW TAB
      window.open(pdfUrl, '_blank');

      let filename = url.split('/').pop() || 'slip.pdf';
      console.log(filename);
      PDF_link.download = filename;
      PDF_link.click();
    });
  }

  ngOnInit(): void {
    this.hrSvc.getEmployeeDetails(10).subscribe((res) => {
      console.log(res);
    });
  }
}
