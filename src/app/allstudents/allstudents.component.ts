import { Component } from '@angular/core';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public studentdata: any= [];
  public term:string='';
  public pageNo: number = 0;
  public limit:number=5;
  public column: string = '';
  public order: string = '';



  constructor(private _allstudentsService:AllstudentsService){
    this._allstudentsService.allstudentsdata().subscribe(
      (data:any)=>{
        this.studentdata= data;
        alert("success");
      },
      (err:any)=>{
        alert('failed');
      }
    )
  }
  filter(){
    this._allstudentsService.filter(this.term).subscribe(
      (data:any)=>{
        this.studentdata=data;
      },
      (err:any)=>{
        alert( 'not filter')
      }
    )
  }
  getpagedstudents() {
    this._allstudentsService.getpagedstudents(this.pageNo).subscribe(
      (data: any) => {
        this.studentdata = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  getsortstudents() {
    this._allstudentsService.getsortstudents(this.column, this.order).subscribe(
      (data: any) => {
        this.studentdata = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  deletedstudents(id: string) {

    this._allstudentsService.deletedstudents(id).subscribe(
      (data: any) => {
        alert("deleted successfully");
        location.reload();

      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }

}




 