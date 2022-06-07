import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  email : string;
  name : string;
  message : string;
  endpoint : string;

  http : HttpClient;

  FormData: FormGroup;
  constructor(private builder: FormBuilder, http : HttpClient) { 
    this.http = http;
  }
  ngOnInit() {
  this.FormData = this.builder.group({
  Name: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  Comment: new FormControl('', [Validators.required])
  })}

  sendEmail(data: any){
    let postVars = {
      email : data.email,
      name : data.name,
      message : data.message
    };

    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, postVars)
        .subscribe(
            response => console.log(response),
            response => console.log(response)
        )
  }
}
