import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  segundoComponenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.segundoComponenteForm = this.formBuilder.group({
      nomeComprador: '',
      vendedor: '',
      data: '',
      numeroProposta: ''
    });
  }

  onSubmit() {
    console.log(this.segundoComponenteForm.value);
  }
}
