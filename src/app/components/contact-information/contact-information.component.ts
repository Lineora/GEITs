import { Component, Input, OnInit } from '@angular/core';
import { ContactType } from 'src/app/models/contact-type';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {




  @Input() contact : ContactType;

  public contactType = ContactType;

  content: string[];

  constructor() {
    this.contact = ContactType.mail;
    this.content = [];
   }

  ngOnInit(): void {
    switch(this.contact){
      case ContactType.adress:
        this.content.push('Adresse : 10 rue Louise Michel,');
        this.content.push('57300 HAGONDANGE, France');
        break;
      case ContactType.mail:
        this.content.push('Adresse e-mail : contact@diamontis.fr')
        break;
      case ContactType.phone:
        this.content.push('Téléphone : +33 (0)6 48 34 20 46');
        break;
    }
  }

}

