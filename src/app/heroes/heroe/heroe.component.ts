import { Component } from "@angular/core";

@Component({
    selector: 'app-hereo',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron Man'
    edad: number = 53

    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(){
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(){
        this.edad = 23;
    }
}    