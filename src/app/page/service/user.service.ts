import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModel, User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserData! : IUserModel;

  constructor(private http:HttpClient) { }

    loginUser(obj:User):Observable<IUserModel>{
    
      return this.http.post<IUserModel>("https://api.freeprojectapi.com/api/SmartParking/login",obj)

    }

    getSiteBuild(obj:User){
      this.http.post("https://api.freeprojectapi.com/api/SmartParking/GetBuildingBySiteId",obj)
    }
}
