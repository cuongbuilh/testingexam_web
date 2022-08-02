import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-top-list',
  templateUrl: './mark-top-list.component.html',
  styleUrls: ['./mark-top-list.component.scss']
})
export class MarkTopListComponent implements OnInit {

  title: any = [{ position:'STT', title: 'Tiêu đề', subject: 'Môn', turn: 'Lượt' }];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  periodicElement: any[] = [
    { position:'', name: 'Hydrogen', weight: 'Toán', symbol: '1' },
    { position:'', name: 'Helium', weight: 'Văn', symbol: '1' },
    { position:'', name: 'Lithium', weight: 'Anh', symbol: '1' },
  ];

  isHideColumn: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
