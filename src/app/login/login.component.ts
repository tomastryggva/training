import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpService) {}

  validVerd: string;
  verd: string[] = ['1-3x í viku', '4x í viku', '5x í viku'];
  verdControl = new FormControl('', [Validators.required]);

  maeling: string;
  maelingValin: string[] = ['með mælingu', 'án mælingu'];
  maelingControl = new FormControl('', [Validators.required]);

  myndControl = new FormControl('');
  myndControl2 = new FormControl('');

  loading = false;
  loading2 = false;
  buttionText = 'Senda umsókn';
  buttionText2 = 'Senda umsókn';
  buttionText22 = 'Senda umsókn';
  stadan1 = '';
  stadan2  = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  ageFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  emailFormControl2 = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl2 = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  ageFormControl2 = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  imageUrl = '/assets/img/person.png';
  fileToUpload: File = null;


  imageUrl2 = '/assets/img/person.png';
  fileToUpload2: File = null;

  ngOnInit() {
    console.log(this.http.test);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  register() {
    this.loading = true;
    this.buttionText = 'Umsókn sendist...';
    console.log(this.imageUrl);
    const user = {
      verk: 'Beiðni um fjarþjálfun',
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      age: this.ageFormControl.value,
      verd: this.maeling,
      image: this.imageUrl
    };

    this.http.sendEmail('https://testareactdot.herokuapp.com/sendmail', user ).subscribe(
      data => {
        console.log('HELLO!');
        const res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = 'Senda umsókn';
        this.stadan1 = 'VILLA';
      }, () => {
        this.loading = false;
        this.buttionText = 'Senda umsókn';
        this.stadan1 = 'tokst';
      }
    );

    this.nameFormControl.reset();
    this.ageFormControl.reset();
    this.emailFormControl.reset();
    this.maelingControl.reset();
    this.myndControl.reset();

    this.imageUrl = '/assets/img/person.png';

  }

  handleFileInput2(file: FileList) {
    this.fileToUpload2 = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl2 = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload2);
  }

  register2() {
    this.loading2 = true;
    this.buttionText2 = 'Umsókn sendist...';
    const user = {
      verk: 'Beiðni um einkaþjálfun',
      name: this.nameFormControl2.value,
      email: this.emailFormControl2.value,
      age: this.ageFormControl2.value,
      verd: this.validVerd,
      image: this.imageUrl2
    };
    this.http.sendEmail('https://testareactdot.herokuapp.com/sendmail', user).subscribe(
      data => {
        console.log('HELLO!');
        const res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.verd} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading2 = false;
        this.buttionText2 = 'Senda umsókn';
        this.stadan2 = 'VILLA';
      }, () => {
        this.loading2 = false;
        this.buttionText2 = 'Senda umsókn';
        this.stadan2 = 'tokst';
      }
    );


    this.nameFormControl2.reset();
    this.ageFormControl2.reset();
    this.emailFormControl2.reset();
    this.verdControl.reset();
    this.myndControl2.reset();

    this.imageUrl2 = '/assets/img/person.png';
  }
}

