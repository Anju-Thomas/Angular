import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {WildcardComponent} from './wildcard/wildcard.component';


const routes: Routes = [
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  {path: '**',
  component: WildcardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

