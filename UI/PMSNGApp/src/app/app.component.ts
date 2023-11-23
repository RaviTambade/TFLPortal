import { Component } from '@angular/core';
import { Project } from './projects/Models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PMSNGApp';
  project: Project | undefined;

  onReceiveProjectId(selectedProjectevent: Project) {
    this.project = selectedProjectevent;
  }
}
