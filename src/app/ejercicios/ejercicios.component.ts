import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  title: string = 'Angular Application';
  fansQuantity: number = 2500;
  
  ngOnInit(): void {
    
  }

  fansQuantityString() : string {
    return this.title + " has " + this.fansQuantity + " Fans";
  }

  addFan() : void {
    this.fansQuantity++;
  }

}



