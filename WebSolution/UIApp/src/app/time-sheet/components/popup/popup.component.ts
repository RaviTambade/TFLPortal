import {Component,EventEmitter,Input,Output,TemplateRef} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @Output() closePopup = new EventEmitter();
  @Input() templateToRender!: TemplateRef<any>;

  onClickClosePopup() {
    this.closePopup.emit();
  }
}
