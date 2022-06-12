import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-column',
  templateUrl: './about-column.component.html',
  styleUrls: ['./about-column.component.scss']
})
export class AboutColumnComponent implements OnInit {

  @Input() title : string;
  public content : string;

  constructor() { 
    this.title = 'Infogérance';
    this.content = '';
  }

  ngOnInit(): void {
    switch(this.title){
      case 'Infogérance':
        this.content = 'Des solutions pour votre réseau informatique, gestion de serveurs et infrastructures. Vos besoins seront étudiés et feront l’objet de devis rapides et entièrement personnalisables.';
      break;
      case 'Cloud et serveur local':
        this.content = 'Sécuriser vos éléments les plus importants par le biais de solutions complètes : duplication, chiffrement ou encore monitoring de votre activité, ne craignez plus de perdre vos données.';
      break;
      case 'Création de site web':
        this.content = 'On vous accompagne dans la concrétisation de vos projets en vous offrant des solutions web complètes : design, hébergement (partenaire OVH certifié), référencement, maintenance…';
      break;
      case 'Conception graphique':
        this.content = 'Votre identité visuelle est au cœur de vos interactions avec vos clients. Notre équipe de graphistes  en communication vous assure un rendu unique et personnel. Logotypes, polices, palettes, …';
      break;
    }
  }

}
