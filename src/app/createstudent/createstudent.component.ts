import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllstudentsService } from '../allstudents.service';
import { CreatestudentService } from '../createstudent.service';
import { tcsMail } from '../validators';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

  public allstudentsdata: any = [];
  public userform: FormGroup = new FormGroup({
    name: new FormControl( null,[Validators.required, Validators.minLength(5)]),
    gender: new FormControl(),
    mobile: new FormControl(null, [ Validators.required ,Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null,[ Validators.required, Validators.email,tcsMail]),
    batch: new FormControl( null,[Validators.required]),
    address: new FormGroup({
      city: new FormControl( null, [Validators.required]),
      mandal: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      state: new FormControl( null ,[Validators.required ]),
      pincode: new FormControl(null ,[Validators.required,Validators.min(100000), Validators.max(999999)]),
    }),
    education: new FormArray([]),
    company: new FormGroup(
      {
        name1: new FormControl( null, [Validators.required]),
        location: new FormControl (null, [Validators.required]),
        package: new FormControl( null, [Validators.required]),
        offerdate: new FormControl( null, [Validators.required])
      }),
    source: new FormControl()
  })
  constructor( private _createstudentService:CreatestudentService){
    this.userform.get('source')?.valueChanges.subscribe(
      (data:any)=>{
        if(data == 'direct'){
        //add socialmedia
        this.userform.addControl('sourcefrom', new FormControl());
        // remove referral
        this.userform.removeControl('referral');
        }
        else{
          //add referral name
          this.userform.addControl('referral', new FormControl());
          //remove socialmedia
          this.userform.removeControl('sourcefrom')
        }
      }
    )

  }

  get educationFormArray() {
    return this.userform.get('education') as FormArray;
  }

  submit() {
     console.log(this.userform.value);
      this.userform.markAllAsTouched();
    this._createstudentService.poststudentdata(this.userform.value ).subscribe(
      (data: any) => {

        alert("data  added successfully");
      },
      (err: any) => {
        alert("not submitted")
      }
    )
  }

  add() {
    this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl(null,[Validators.required]),
        year: new FormControl( null, [Validators.required]),
        percentage: new FormControl()
      })
    )
  }

  delete(i: number) {
    this.educationFormArray.removeAt(i);
  }



}







