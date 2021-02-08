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
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import {EmployeeService} from './employee.service';

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
    CreateItemComponent,
    EmployeelistComponent,
    EmployeedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ModelService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
