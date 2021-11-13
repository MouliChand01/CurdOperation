import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css'],
})
export class DisplaydataComponent implements OnInit {
  constructor(private ser: MyservicesService, private act: ActivatedRoute) {}

  id: any;

  data: any;

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.ser.GetDataById(this.id).subscribe((data1) => (this.data = data1));
  }
  viewData() {}
}
