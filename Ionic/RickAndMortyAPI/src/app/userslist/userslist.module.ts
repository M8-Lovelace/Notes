import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserslistPageRoutingModule } from './userslist-routing.module';

import { UserslistPage } from './userslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserslistPageRoutingModule
  ],
  declarations: [UserslistPage]
})
export class UserslistPageModule {}
