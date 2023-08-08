import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
