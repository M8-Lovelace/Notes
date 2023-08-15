import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserslistPage } from './userslist.page';

const routes: Routes = [
  {
    path: '',
    component: UserslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserslistPageRoutingModule {}
