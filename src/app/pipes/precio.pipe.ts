import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
  standalone: false,
})
export class PrecioPipe implements PipeTransform {
  transform(
    value: number,
    moneda: string = 'USD',
    decimales: boolean = false,
  ): string {
    let opciones: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: moneda,
    };
    if (!decimales) opciones.minimumFractionDigits = 0;

    return new Intl.NumberFormat('es-CO', opciones).format(value);
  }
}
