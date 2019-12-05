import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-open-model',
  templateUrl: './open-model.component.html',
  styleUrls: ['./open-model.component.css']
})

export class OpenModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openModel(myModel){
   // modalService.open(myModel)
  }
  onSubmit(e: NgForm){
    debugger;
    console.log(e);console.log(e.value);
  
  }
  onKey(evt){
    console.log(evt);
    if(evt.target.value.length > 0){
      evt.validated = true;
    }else{
      evt.validated = false;
    }
  }

  myObj = [
    {
      "id": "id",
      "type": "text",
      "name": "name",
      "label": "Enter name",
      "required": true,
      "placeholder":"my placeholder",
      "class": "col-sm-12 col-md-6 col-lg-4"
    },
    {
      "id": "id1",
      "type": "email",
      "name": "email",
      "label": "Enter email",
      "required": true,
      "class": "col-sm-12 col-md-6 col-lg-4",
      "help":"We'll never share your email with anyone else."
    },
    {
      "id": "id2",
      "type": "checkbox",
      "name": "checkbox",
      "label": "Please Select below",
      "required": true,
      "class": "col-sm-12 col-md-6 col-lg-4"
    },{
      "type": "dropdown",
      "name": "visibility",
      "label": "visibility",
      "option": [{
          "value": null,
          "label": "Please select an option"
        },
        {
          "value": "Private",
          "label": "Private"
        },
        {
          "value": "Public",
          "label": "Public"
        }
      ],
      "required": "true",
      "class": "col-sm-12 col-md-6 col-lg-4"
    },
    {
      "id": "id4",
      "type": "file",
      "name": "file",
      "label":"Please Select file",
      "required": true,
      "class": "col-sm-12 col-md-6 col-lg-4"
    }
  ]

  buttons = [
    {
			"label": "Save",
			"variant": "primary",
			"type": "submit"
		}
  ]

}
