import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  masterSrv = inject(MasterService)

  ngOnInit(): void {
    debugger
    
  }

  
}
