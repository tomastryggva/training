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
  verd: string[] = ['1-3x í viku', '4x í viku', '5x í viku'];
  verdControl = new FormControl('', [Validators.required]);

  maeling: string;
  maelingValin: string[] = ['með mælingu', 'án mælingu'];
  maelingControl = new FormControl('', [Validators.required]);

  myndControl = new FormControl('', [Validators.required]);
  myndControl2 = new FormControl('', [Validators.required]);


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
  buttionText = "Senda umsókn";
  buttionText2 = "Senda umsókn";
  buttionText22 = "Senda umsókn";
  stadan1 = 'Test Test';
  stadan2  = "Test Test";

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

  register() {
    this.loading = true;
    this.buttionText = "Umsókn send";
    let user = {
      verk: "Beiðni um fjarþjálfun",
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      age: this.ageFormControl.value,
      verd: this.maeling,
      image: this.imageUrl
    }

    this.http.sendEmail("VANTAR LOCALHOST", user ).subscribe(
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
        this.buttionText = "Senda umsókn";
        this.stadan1 = "VILLA - Umsókn mistókst";
      },() => {
        this.loading = false;
        this.buttionText = "Senda umsókn";
        this.stadan1 = "Umsókn tókst!";
      }
    )

    this.nameFormControl.reset();
    this.ageFormControl.reset();
    this.emailFormControl.reset();
    this.maelingControl.reset();
    this.myndControl.reset();

    this.imageUrl = "/assets/img/imgg.png";

  }


  imageUrl2 : string = "/assets/img/imgg.png";
  fileToUpload2 : File = null;

  handleFileInput2(file : FileList){
    this.fileToUpload2 = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload2);
  }

  register2() {
    this.loading2 = true;
    this.buttionText2 = "Umsókn sendist...";
    let user = {
      verk: "Beiðni um einkaþjálfun",
      name: this.nameFormControl2.value,
      email: this.emailFormControl2.value,
      age: this.ageFormControl2.value,
      verd: this.validVerd,
      image: this.imageUrl2
    }
    this.http.sendEmail("VANTAR LOCALHOST", user).subscribe(
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
        this.buttionText2 = "Senda umsókn";
        this.stadan2 = "VILLA - Umsókn mistókst";
      },() => {
        this.loading2 = false;
        this.buttionText2 = "Senda umsókn";
        this.stadan2 = "Umsókn tókst!";
      }
    );
    

    this.nameFormControl2.reset();
    this.ageFormControl2.reset();
    this.emailFormControl2.reset();
    this.verdControl.reset();
    this.myndControl2.reset();

    this.imageUrl2 = "/assets/img/imgg.png";
  }
}

