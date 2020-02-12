import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../http.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  image =
    "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  name1;
  age;
  loading = false;
  loading2 = false;
  buttionText = "Senda skilaboð";
  buttionText2 = "Senda skilaboð";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  ageFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  emailFormControl2 = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl2 = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  ageFormControl2 = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  constructor(public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  changeImage() {
    this.http.test = "changed";
    this.image =
      "https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  }

  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      verk: "Beiðni um fjarþjálfun",
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      age: this.ageFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }

  register2() {
    this.loading2 = true;
    this.buttionText2 = "Submiting...";
    let user = {
      verk: "Beiðni um einkaþjálfun",
      name: this.nameFormControl2.value,
      email: this.emailFormControl2.value,
      age: this.ageFormControl2.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading2 = false;
        this.buttionText2 = "Submit";
      },() => {
        this.loading2 = false;
        this.buttionText2 = "Submit";
      }
    );
  }
}

