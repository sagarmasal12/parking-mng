export class User{

  emailId: string;
  password: string;

  constructor(){
    this.emailId = '';
    this.password = '';
  }
}

export interface IUserModel {
  userId: number
  emailId: string
  password: string
  createdDate: string
  projectName: string
  fullName: string
  mobileNo: string
  extraId: any
}

export interface ResponseModel {
  message: string
  result: boolean
  data: any[]
}