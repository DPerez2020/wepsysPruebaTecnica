import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/user';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() agregar=new EventEmitter<Usuario>();
  constructor( private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      Nombre:['',[Validators.required]],
      Apellido:['',[Validators.required]],
      Correo:['',[Validators.required,Validators.email]]
    });
  }

  ngOnInit(): void {
  }
  agregarUsuario(){
    if (this.formGroup.valid) { 
      this.agregar.emit(this.formGroup.value);      
    }
  }
}
