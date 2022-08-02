import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-com-detail',
  templateUrl: './com-detail.component.html',
  styleUrls: ['./com-detail.component.scss']
})
export class ComDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name:'', weight: '', symbol: ''}) { }

  ngOnInit(): void {
  }

}
