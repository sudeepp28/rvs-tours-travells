import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-from',
  standalone:false,
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent implements OnInit{

  images=[
    {id:'1', src:"assets/toyota.png"},
    {id:'2', src:"assets/sedan.png"},
    {id:'3',src:"assets/Ertiga.png"},
    {id:'4',src:"assets/Innova.png"},
    {id:'5',src:"assets/Hycross.png"},
    {id:'6',src:"assets/fortuner.png"},
    {id:'7',src:'assets/Tempo.png'},
    {id:'8',src:'assets/Traveller.png'},
    {id:'9',src:'assets/Luxury Coaches.png'}
  ]

  seletedVehicleId:any
  selectedVehicleImage:any
  constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.seletedVehicleId=this.route.snapshot.paramMap.get('id')
  console.log(this.seletedVehicleId)

  if(this.seletedVehicleId){
    const selectedimage=this.images.find(i=>i.id===this.seletedVehicleId)
    this.selectedVehicleImage=selectedimage?.src
  }
}
 activeForm: string = 'airport';

  selectForm(formName: string) {
    this.activeForm = formName;
  }
}
