import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] | undefined;
  @Input() periodicElement: any;
  @Input() title: any;
  @Input() isHideColumn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showDetail(item: any) {
    console.log(item);
    
  }
}
