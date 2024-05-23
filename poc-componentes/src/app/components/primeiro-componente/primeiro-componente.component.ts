import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  formPrimeiroComponente: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formPrimeiroComponente = this.formBuilder.group({
      fabricante: '',
      veiculo: '',
      modelo: '',
      ano: ''
    });
  }

  onSubmit() {
    console.log(this.formPrimeiroComponente.value);
  }
}
