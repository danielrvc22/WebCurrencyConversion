import { Component } from '@angular/core';
import { CurrencyConversionService } from '../../services/currency-conversion.service';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrl: './currency-conversion.component.css'
})
export class CurrencyConversionComponent {

  fromCurrency: string = '';
  toCurrency: string = '';
  amount: number = 0;
  conversionResult: any;

  constructor(private currencyService: CurrencyConversionService) {}


  convertCurrency() {
    if (this.fromCurrency && this.toCurrency && this.amount > 0) {
      console.log("paso 1  -" , this.fromCurrency) ;
      this.currencyService.getCurrencyConversion(this.fromCurrency, this.toCurrency, this.amount)
        .subscribe({
          
          next: (response) => {

            // console.log("data -" ,response)
            this.conversionResult = response;
          },
          error: (error) => {
            console.error('Error al obtener la conversión', error);
            alert('Error en la conversión. Verifica los datos ingresados.');
          }
        });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

}
