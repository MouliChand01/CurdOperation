import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css'],
})
export class ViewdataComponent implements OnInit {
  empdata: any;

  constructor(private src: MyservicesService, private rou: Router) {}

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.src.GetData().subscribe((data) => (this.empdata = data));
    // return console.log(this.empdata);
  }
  addemp() {
    this.rou.navigate(['/addemployee']);
  }

  // deldata
  deldata(id: any) {
    this.src.DelData(id).subscribe(() => this.getdata());
  }

  //viewdata
  viewdata(id: any) {
    this.rou.navigate(['display', id]);
    // console.log(data);
  }

  update(id:any){
    this.rou.navigate(['update',id]);
  }
}
