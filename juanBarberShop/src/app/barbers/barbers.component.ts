import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.scss']
})
export class BarbersComponent implements OnInit {

  public barbers: Array<any> = new Array<any>()

  public selected_Barber: any = {};

  public isSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.get_All_Barbers()
  }

  get_All_Barbers(){
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
    this.barbers.push({name:"hihi", description: "jojojo", picture: "sdhgfsdj"})
  }

  set_selected_barber(b: any){
    
    this.isSelected = true;
    this.selected_Barber = b;
  }
}
