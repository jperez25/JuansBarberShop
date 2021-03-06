import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services : Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
    this.get_all_services()
  }

  get_all_services(){
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
    this.services.push({name:"haircut", price:"20", description:"A base haircut, with hair wash afterwards"})
  }

}
