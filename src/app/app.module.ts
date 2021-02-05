import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { BindingComponent } from './binding/binding.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { DependentComponent } from './dependent/dependent.component';
import  {ModelService} from './model.service';
import {ViewItemComponent} from './view-item/view-item.component';
import {CreateItemComponent} from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ParentComponent,
    ChildComponent,
    PipeComponent,
    BindingComponent,
    CustomDirective,
    CustomPipe,
    DependentComponent,
    ViewItemComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
