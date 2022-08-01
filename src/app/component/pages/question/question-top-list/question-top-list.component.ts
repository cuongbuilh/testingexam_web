import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 'Toán', symbol: '1'},
  {name: 'Helium', weight: 'Văn', symbol: '1'},
  {name: 'Lithium', weight: 'Anh', symbol: '1'},
];
@Component({
  selector: 'app-question-top-list',
  templateUrl: './question-top-list.component.html',
  styleUrls: ['./question-top-list.component.scss']
})
export class QuestionTopListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
