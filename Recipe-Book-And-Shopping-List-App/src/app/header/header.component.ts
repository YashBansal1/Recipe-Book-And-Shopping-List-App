import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  featureSelected = output<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
