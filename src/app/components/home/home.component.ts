import { Component , OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hide: boolean = false;
SignUpForm!:FormGroup;
  constructor(private fb: FormBuilder, private ComService: ServicesService){

  }
  ngOnInit(){

    this.SignUpForm= this.fb.group({
      name: ["",Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(7)]],
    })

  }

  signup(): void {
    console.log("click")
    this.ComService.signup(this.SignUpForm.value).subscribe((msg) => {
      Swal.fire({
        title: "Good job!",
      text: "Registered!",
      icon: "success"
      })
      console.log(msg);

    });
  }

}
