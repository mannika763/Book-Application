import { Component } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm!:FormGroup;
  hide: boolean = false;
  clickMessage = '';
  name: any;

  constructor(private fb: FormBuilder,private router: Router, private ComService: ServicesService){

  }

  ngOnInit(){

    this.LoginForm= this.fb.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(7)]],
    })

  }
  login(){
    this.ComService.login(this.LoginForm.value.email, this.LoginForm.value.password)

        this.handleLoginNavigation();

  }


  private handleLoginNavigation(): void {

    this.router.navigate([""]);

  }

 


}
