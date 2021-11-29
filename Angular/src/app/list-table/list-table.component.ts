import { Usuario } from './../models/user';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  @Input() usuarios:Usuario[]=[];
  @Output() eliminar=new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminarUsuario(usuario:Usuario){
    console.log("Eliminando",usuario);
    
    this.eliminar.emit(usuario);
  }
}
