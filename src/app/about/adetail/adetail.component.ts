import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutData } from '../../aboutData';

@Component({
  selector: 'app-adetail',
  standalone:false,
  templateUrl: './adetail.component.html',
  styleUrl: './adetail.component.css'
})
export class AdetailComponent implements OnInit{
 
  data=AboutData
  selectedId:any
  selectedData:any
constructor(private route: ActivatedRoute,private router:Router){

}
isPopup=false
openPopUp(){
this.isPopup=true
}
closePopUp(){
this.isPopup=false
}
goto(id:string){
  this.router.navigate([`/forms/${id}`])
}
ngOnInit(): void {
  this.selectedId=this.route.snapshot.paramMap.get('id')
  console.log(this.selectedId)
  if(this.selectedId){
    this.selectedData=this.data.find(i=>i.id===this.selectedId)
    console.log(this.selectedData)
  }
}
}
