import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<string>();

  onClose() {
    this.close.emit();
  }
}
