import { Component, OnInit } from '@angular/core';
import { ContactType } from 'src/app/models/contact-type';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public contactType = ContactType;
  constructor() { }

  ngOnInit(): void {
  }

}
