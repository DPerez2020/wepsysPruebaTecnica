import { Usuario } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPrueba';
  mensaje="";
  listaUsuarios:Usuario[]=[];
  agregarUsuario(usuario:Usuario){
    if (this.listaUsuarios.findIndex(x=>x.Correo==usuario.Correo)==-1) {
      this.listaUsuarios.push(usuario);
      this.mensaje="";
    }else{
      this.mensaje="El correo ya esta registrado";
    }
  }
  eliminarUsuario(usuario:Usuario){    
    this.listaUsuarios= this.listaUsuarios.filter(x=>x.Correo!=usuario.Correo)
  }
}
