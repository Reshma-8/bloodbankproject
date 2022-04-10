import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalControllerService } from 'src/app/Services/hospital-controller.service';

@Component({
  selector: 'app-deletehospital',
  templateUrl: './deletehospital.component.html',
  styleUrls: ['./deletehospital.component.css']
})
export class DeletehospitalComponent implements OnInit {
hospitals:Hospital[];
hospital:Hospital;
errMsg:string=''
  constructor(private hospitalcontrollerservice:HospitalControllerService) {
    
    this.RemoveHospitalDetails();

  }

  ngOnInit(): void {
  }
  RemoveHospitalDetails():void
  {
    let id=this.hospital.hospitalId;
    if(
    this.hospitalcontrollerservice.RemoveHospitalDetails(id).subscribe(res=>{
      console.log(res);

    })){
      this.errMsg='deleted';
    }
    else{
      this.errMsg='not';
    }

  }

}