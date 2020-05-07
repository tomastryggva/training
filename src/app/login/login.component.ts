import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../http.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validVerd: string;
  verd: string[] = ['30.000kr', '40.000kr', '50.000kr'];
  verdControl = new FormControl('', [Validators.required]);

  maeling: string;
  maelingValin: string[] = ['Mæling', 'Ekki mæling'];
  maelingControl = new FormControl('', [Validators.required]);


  divs = ["1", "2", "3"];
  options = ["opt1", "opt2", "opt3"];
  
  print(value_of , value) {
    console.log('value of' , value_of , 'is' , value );
 }

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

    this.http.sendEmail("http://localhost:3000/sendmail", user ).subscribe(
      data => {
        console.log("HELLO!");
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
    )

    this.nameFormControl.reset();
    this.ageFormControl.reset();
    this.emailFormControl.reset();

  }

  imageUrl : string = "/assets/img/imgg.png";
  fileToUpload : File = null;

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  register2() {
    this.loading2 = true;
    this.buttionText2 = "Submiting...";
    let user = {
      verk: "Beiðni um einkaþjálfun",
      name: this.nameFormControl2.value,
      email: this.emailFormControl2.value,
      age: this.ageFormControl2.value,
      verd: this.validVerd,
      image: this.imageUrl
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        console.log("HELLO!");
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.verd} is successfully register and mail has been sent and the message id is ${res.messageId}`
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

    this.nameFormControl2.reset();
    this.ageFormControl2.reset();
    this.emailFormControl2.reset();
  }
}

