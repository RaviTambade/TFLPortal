import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PMSNGApp';
  projectId: number | undefined;

  onReceiveProjectId(selectedProjectIdevent: number) {
    this.projectId = selectedProjectIdevent;
  }
}
