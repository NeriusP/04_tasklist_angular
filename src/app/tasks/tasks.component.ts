import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  pavadinimas: string = '';
  tipas: string = '';
  sarasas: Task[] = [];
  buttonDisabled = true;
  id: number = 0;
  noTask : boolean;
  noType : boolean;
 
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.pavadinimas.trim() === '') {
      this.noTask = true;
      
      return;
    } else if (this.tipas  === '') {
      this.noTask = false;
      this.noType = true;
      return;
    } else {
      this.sarasas.push(new Task(++this.id, this.pavadinimas, this.tipas));
      console.log(this.id, this.pavadinimas, this.tipas);
      this.noTask = undefined;
      this.noType = undefined;
      this.pavadinimas = '';
      this.tipas = '';
    }
   
  }

  trinti(i) {
    this.sarasas.splice(i, 1);
  }

  // disableButton(){
  //   if(this.pavadinimas == '' || this.tipas  == ''){
  //     return true;
  //   }
  //   else {return false}
  // }


}
