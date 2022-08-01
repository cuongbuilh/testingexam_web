import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 'Toán', symbol: '1'},
  {position: 2, name: 'Helium', weight: 'Văn', symbol: '1'},
  {position: 3, name: 'Lithium', weight: 'Anh', symbol: '1'},
];

@Component({
  selector: 'app-exam-top',
  templateUrl: './exam-top.component.html',
  styleUrls: ['./exam-top.component.scss']
})
export class ExamTopComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
