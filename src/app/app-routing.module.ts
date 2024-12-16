import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConversionComponent } from './components/currency-conversion/currency-conversion.component';

const routes: Routes = [  { path: 'conversion', component: CurrencyConversionComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
