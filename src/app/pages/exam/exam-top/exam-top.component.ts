import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-top',
  templateUrl: './exam-top.component.html',
  styleUrls: ['./exam-top.component.scss'],
})
export class ExamTopComponent implements OnInit {
  title: any = [{ position:'STT', title: 'Tiêu đề', subject: 'Môn', turn: 'Lượt' }];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  periodicElement: any[] = [
    { position:'', name: 'Hydrogen', weight: 'Toán', symbol: '1' },
    { position:'', name: 'Helium', weight: 'Văn', symbol: '1' },
    { position:'', name: 'Lithium', weight: 'Anh', symbol: '1' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
