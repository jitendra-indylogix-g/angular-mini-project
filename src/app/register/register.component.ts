import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterdataService } from '../services/registerdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerModel = new Register('test','test@gmail.com', 1234567890, "" , 'morning', true);
  // submitted = false;
  topic = ["Angular JS" , "Node Js" , "Vue JS"]; 
  topicHasError = true;
  
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  

  constructor(private _registerServices: RegisterdataService ) { }

  ngOnInit(): void {
    this._registerServices.enroll(this.registerModel)
      .subscribe(
        data => console.log('sucess!' , data),
        data => console.error('error!' , data)
      )
  }

  onSubmit(){
    // this.submitted = true;
    // console.log(this.registerModel);

    this._registerServices.enroll(this.registerModel)
       .subscribe(
         data => console.log('Sucess!' , data),
         error => console.error('Error!' , error) 
       )

  }

}
