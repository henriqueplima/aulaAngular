import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-component',
  templateUrl: './Loading.component.html'
})
export class LoadingComponent {
    @Input() show: boolean = false;
}