import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChildren('input') inputFields!: QueryList<any>;

  contact: any = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  }

  post = {
    // Where to send the post request Ex. www.my-domain/sendMail.php
    endPoint: "https://www.vilia-zeisig.com/sendmail.php",
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        "Content-Type": "text/plain",
        responseType: 'text',
      },
    },
  };

  invalid = false;
  successfullySend = false; 
  submitted = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void { }

  onSubmit(ngForm: any) {
    // this.submitted = true;
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log('response is:', response),
          error: (error) => console.error('error occured:', error),
          complete: () => {
            console.info('CONGRATS!! send post complete. Yeah!!!')
          }
        });
        setTimeout(() => {
          this.successfullySend = true;
          window.scrollTo(0, document.body.scrollHeight);
        }, 50);
    }
    setTimeout(() => { this.resetAllInputs(), 200 });
    setTimeout(() => { this.successfullySend = false}, 3500 );
  }


  resetAllInputs() {
    let arrayOfInputs = this.inputFields.toArray();
    arrayOfInputs.forEach((input) => (input.nativeElement.value = ''));
  }

}
