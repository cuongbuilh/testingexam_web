import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ComDetailComponent } from '../com-detail/com-detail.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showDetail(item: any) {
    console.log(item);
    this.dialog.open(ComDetailComponent);

    
  }
}
