import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MenuComponent } from './a/menu/menu.component';
import { ProjectionComponent } from './projection/projection.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AComponent,
    BComponent,
    MenuComponent,
    ProjectionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
