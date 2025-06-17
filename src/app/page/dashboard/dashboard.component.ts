import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { ResponseModel } from '../model/user.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  masterSrv = inject(MasterService)

  ngOnInit(): void {
      
  }

  getSites(){
    this.masterSrv.getSiteByClientId().subscribe((res:ResponseModel)=>{
      
    })
  }

  
}
