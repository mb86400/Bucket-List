import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item'
  goalText: string = 'My first goal'
  goals = []


  constructor() { }

  ngOnInit() { // this runs when the app loads
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = ''; //clear after submited
    this.itemCount = this.goals.length;
  }

}
