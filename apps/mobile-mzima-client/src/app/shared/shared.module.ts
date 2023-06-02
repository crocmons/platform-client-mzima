import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {
  FormControlComponent,
  IconComponent,
  CheckboxComponent,
  ButtonComponent,
  ModalComponent,
  PageNotFoundComponent,
  MenuComponent,
  SpinnerComponent,
  RadioComponent,
  SelectComponent,
  CalendarComponent,
} from './components';
import { CalendarModule } from 'ion2-calendar';

const components = [
  IconComponent,
  FormControlComponent,
  CheckboxComponent,
  ButtonComponent,
  ModalComponent,
  PageNotFoundComponent,
  MenuComponent,
  SpinnerComponent,
  RadioComponent,
  SelectComponent,
  CalendarComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, TranslateModule, RouterModule, FormsModule, CalendarModule],
  exports: [IonicModule, CommonModule, ...components],
})
export class SharedModule {}