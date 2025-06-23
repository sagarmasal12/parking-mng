import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { ISite, ResponseModel } from '../model/user.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  masterSrv = inject(MasterService);
  
  siteList:ISite[]=[]

  siteName = ["asdf",'pune','baner','hijewadi']

  ngOnInit(): void {
    debugger
      this.getSites();
  }

  getSites(){
    debugger
    this.masterSrv.getSiteByClientId().subscribe((res:ResponseModel)=>{
      this.siteList=res.data
    })
  }

  
}
