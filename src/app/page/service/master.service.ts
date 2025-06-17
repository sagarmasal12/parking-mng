import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


    userSrv= inject(UserService);

  constructor(private http:HttpClient) { }




  getSiteByClientId():Observable<ResponseModel>{
    const clientId = this.userSrv.loggedUserData.extraId
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id="+clientId)
  }
  
}
