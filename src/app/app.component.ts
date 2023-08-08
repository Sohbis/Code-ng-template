import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [1, 2, 3, 4, 5];
  isTrue: boolean = true;
  name = 'Angular best practices';

  // @ViewChild('templateRef')
  // public templateref: TemplateRef<any>;

  getTraslateValue(cellvalue) {
    return 'some value';
  }

  ngAfterViewInit() {
    // console.log(this.templateref.elementRef);
  }

  alert() {
    alert('Hello');
  }
}
