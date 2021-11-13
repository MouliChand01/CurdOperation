import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: any=0;
  product1:any;
  

  constructor(private ser: MyservicesService, private act: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.ser.GetDataById(this.id).subscribe(data => {
      console.log(data)
      this.product1=data;
    },
    error => console.log(error));
  }
  
   

  updateData() {
    this.ser.UpdateData(this.id,this.product1).subscribe(data=>{
      console.log(data);
      this.router.navigate(['viewdata'])
    })
   
  }
}
