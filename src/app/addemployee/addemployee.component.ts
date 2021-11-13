import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {
  

  constructor(private src: MyservicesService, private rou: Router) {}

  ngOnInit(): void {}

  senddata(data:any){
    this.src.Postdata(data).subscribe()
    this.rou.navigate(['viewdata'])
    
   

  }

  
}
