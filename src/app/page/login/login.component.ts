
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserModel, User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginobj : User = new User(); 

  userSrv = inject(UserService); //access service

  router = inject(Router) // when navigate from .ts or navigate another componet need to inject router


  onLogin(){
    this.userSrv.loginUser(this.loginobj).subscribe((res)=>{
      debugger
      console.log(res)
      // in IUserModel we store the data 
      alert('User Found');
      localStorage.setItem("parkUser",JSON.stringify(res));
      this.userSrv.loggedUserData= res;
      this.router.navigateByUrl("/dashboard")
    },error=>{
      alert("Wrong Credential")
    })
  }


}
